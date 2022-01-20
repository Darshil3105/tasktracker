import { useEffect, useRef, useState } from 'react';
import classes from './App.module.css';
import Form from '../Form/Form';
import FilterButton from '../FilterButton/FilterButton';
import TaskList from '../TaskList/TaskList';
import api from "../../api/tasks";
import { nanoid } from "nanoid";

/* FILTER TYPE AND NAME */
const FILTER_TYPE = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_BTN_NAME = Object.keys(FILTER_TYPE);

function App() {

  /* STATES AND REF */
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputSearch = useRef("");

  /* WHEN THE CHECKBOX IS CHECKED OR UNCHECKED FOLLOWING METHOD WILL BE CALLED */
  const updateTaskCompleteStatus = async (id,taskName,completed) => {

    /* THIS WILL UPDATE THE DATABASE WITH THE LATEST VALUES */
    const response = await api.put(`/tasks/${id}`,{id,taskName,completed:!completed});

    /* THIS WILL UPDATE THE STATE */
    setTasks(tasks.map((task) => {
      return task.id === id ? {...response.data} : task;
    }))
  }

  /* FUNCTION IS USED TO RETRIEVE ALL THE TASKS FROM THE DATABASE */
  const retrieveTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
  }

  /* FUNCTION ADDS A NEW TASK TO THE LIST */
  const addNewTask = async (task) => {
    const request = {
      id: nanoid(),
      taskName: task,
      completed: false
    }

    const response = await api.post("/tasks",request);

    setTasks([...tasks, response.data]);
  }

  /* FUNCTION UPDATES THE TASK BASED ON THE ID OF THE TASK */
  const updateTask = async (id,taskName,completed) => {

    /* THIS WILL UPDATE THE DATABASE WITH THE LATEST VALUES */
    const response = await api.put(`/tasks/${id}`,{id,taskName,completed});

    /* THIS WILL UPDATE THE STATE */
    setTasks(tasks.map((task) => {
      return task.id === id ? {...response.data} : task;
    }))
  }

  /* FUNCTION DELETES A PARTICULAR TASK BASED ON THE ID OF THE TASK */
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
  }

  /* BASED ON FILTER BUTTON NAMES THIS CREATES A BUTTON LIST */
  const filterBtnList = FILTER_BTN_NAME.map(name => (
    <FilterButton
      key = {name}
      name = {name}
      isPressed = {name === filter}
      setFilter = {setFilter}
    />
  ))

  useEffect(() => {
    /* FUNCTION IS USED TO FETCH DATA FROM THE DATABASE AND SET THE STATE */
    const getAllTasks = async () => {
      const allTasks = await retrieveTasks();

      if(allTasks) setTasks(allTasks);
    }

    getAllTasks();
  },[])

  useEffect(() => {
  },[tasks])

  /* CREATES A TASK LIST */
  const taskList = () => {

    /* IF THE USER ENTERS SOMETHING IN THE SEARCH BAR AND ITS' LENGTH IS LESS THAN 1 THEN IT RETURNS ALL THE TASK ELSE IT WILL RETURN ONLY THE TASKS WHICH MATCHES THE CHARACTERS ENTERED BY THE USER  */
    if(searchTerm.length < 1 ){
      return(
        tasks
        .filter(FILTER_TYPE[filter])
        .map(task => (
          <TaskList
            id={task.id}
            taskName={task.taskName}
            completed={task.completed}
            key={task.id}
            updateTaskCompleteStatus={updateTaskCompleteStatus}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))
      )
    }
    else{
      return(
        searchResults
        .filter(FILTER_TYPE[filter])
        .map(task => (
          <TaskList
            id={task.id}
            taskName={task.taskName}
            completed={task.completed}
            key={task.id}
            updateTaskCompleteStatus={updateTaskCompleteStatus}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))
      )
    }
  }

  /* FUNCTION RETURNS ALL THE TASKS BASED ON THE USER INPUT IN THE SEARCH BAR */
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newTaskList = tasks.filter((task) => {
        const taskName = task.taskName.toLowerCase();
        if(taskName.includes(searchTerm.toLowerCase())){
          return Object.values(task)
        }
      });
      setSearchResults(newTaskList);
    }
    else{
      setSearchResults(tasks);
    }
  }

  /* BASED ON LENGTH OF THE TASTLIST THIS DISPLAY'S
     TASK NOUN AND THE HEADING WITH THE TOTAL NUMBER
     OF TASKS
  */
  const tasksNoun = taskList().length > 1 ? 'tasks' : 'task';
  const headText = `${taskList().length} ${tasksNoun}`;
  const listHeadingRef = useRef(null);

  return (

    /* MAIN CONTAINER */
    <div className = {classes.wrapper}>
      
      {/* TITLE */}
      <h1 className = {classes.title}>Task Tracker</h1>

      {/* FORM TO ADD A NEW TASK WITH ADD BUTTON */}
      <Form addNewTask = {addNewTask} />

      {/* FILTER BUTTONS AND SEARCH BAR CONTAINER */}
      <div className = {classes.searchFilter}>

        {/* FILTER BUTTONS */}
        <div className = {classes.filterBtn}>
          {filterBtnList}
        </div>
          
        {/* SEARCH BAR */}
        <input
          ref = {inputSearch}
          type = "text"
          name = 'search'
          autoComplete='off'
          value = {searchTerm}
          onChange = {() => searchHandler(inputSearch.current.value)}
        /> 

      </div>

      {/* TOTAL NUMBER OF TASKS HEADING */}
      <div className = {classes.listHeading}>
        <h2 id="list-heading" tabIndex = "-1" ref = {listHeadingRef}>{headText}</h2>
      </div>

      {/* TASKLIST */}
      <div className = {classes.taskList}>
        <ul
          role="list"
          aria-labelledby="list-heading"
        >
          {
            taskList()
          }
        </ul>
      </div>

    </div>
  );
}

export default App;