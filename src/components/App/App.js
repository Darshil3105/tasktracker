import { useEffect, useState } from 'react';
import classes from './App.module.css';
import Form from '../Form/Form';
import FilterButton from '../FilterButton/FilterButton';
import TaskList from '../TaskList/TaskList';
import api from "../../api/tasks";
import { nanoid } from "nanoid";

const FILTER_TYPE = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_BTN_NAME = Object.keys(FILTER_TYPE);

function App() {

  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const retrieveTasks = async () => {
    const response = await api.get("/tasks");
    return response.data;
  }

  const addNewTask = async (task) => {
    const request = {
      id: nanoid(),
      taskName: task,
      completed: false
    }

    const response = await api.post("/tasks",request);

    setTasks([...tasks, response.data]);
  }

  const filterBtnList = FILTER_BTN_NAME.map(name => (
    <FilterButton
      key = {name}
      name = {name}
      isPressed = {name === filter}
    />
  ))

  useEffect(() => {
    const getAllTasks = async () => {
      const allTasks = await retrieveTasks();

      if(allTasks) setTasks(allTasks);
    }

    getAllTasks();
  },[])

  const taskList = tasks
  .map(task => (
    <TaskList
      id = {task.id}
      taskName = {task.taskName}
      completed = {task.completed}
      key = {task.id}
    />
  ))

  return (
    <div className = {classes.wrapper}>
      <h1 className = {classes.title}>Task Tracker</h1>

      <Form addNewTask = {addNewTask} />

      <div className = {classes.searchFilter}>

        <div className = {classes.filterBtn}>
          {filterBtnList}
        </div>
          
        <input type = "text" name = 'search' autoComplete='off' /> 

      </div>

      <div className = {classes.listHeading}>
        <h2 id="list-heading">3 Tasks</h2>
      </div>

      <div className = {classes.taskList}>
        <ul
          role="list"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>

    </div>
  );
}

export default App;