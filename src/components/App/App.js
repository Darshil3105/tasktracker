import classes from './App.module.css';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

function App() {
  return (
    <div className = {classes.wrapper}>
      <h1 className = {classes.title}>Task Tracker</h1>

      <form className = {classes.wrapperForm}>

        <input
          type="text"
          id="new-task-input"
          placeholder='Create a new task!'
          name='text'
          autoComplete='off'
        />

        <button type='submit'>
          Add Task
        </button>

      </form>

      <div className = {classes.searchFilter}>

        <div className = {classes.filterBtn}>

          <button type="button" aria-pressed="true">
            <span className = {classes.hiddenText}>Show </span>
            <span>All</span>
            <span className = {classes.hiddenText}> tasks</span>
          </button>

          <button type="button" aria-pressed="false">
            <span className = {classes.hiddenText}>Show </span>
            <span>Active</span>
            <span className = {classes.hiddenText}> tasks</span>
          </button>

          <button type="button" aria-pressed="false">
            <span className = {classes.hiddenText}>Show </span>
            <span>Completed</span>
            <span className = {classes.hiddenText}> tasks</span>
          </button>

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
          <li>
            <div className = {classes.listItems}>
              <input id="todo-0" type="checkbox"/>
              <label htmlFor="todo-0">
                Eat
              </label>
            </div>
            <div className = {classes.btnGroup}>
              <button aria-label="Eat Edit" type="button">
                <FaRegEdit className = {classes.editBtn} />
              </button>
              <button aria-label= "Eat Delete" type="button">
                <MdOutlineDeleteSweep className = {classes.deleteBtn} />
              </button>
            </div>
          </li>

          <li>
            <div className = {classes.listItems}>
              <input id="todo-1" type="checkbox" />
              <label htmlFor="todo-1">
                Sleep
              </label>
            </div>
            <div className = {classes.btnGroup}>
              <button aria-label="Sleep Edit" type="button">
                <FaRegEdit className = {classes.editBtn} />
              </button>
              <button aria-label="Sleep Delete" type="button">
                <MdOutlineDeleteSweep className = {classes.deleteBtn} />
              </button>
            </div>
          </li>

          <li>
            <div className = {classes.listItems}>
              <input id="todo-2" type="checkbox" />
              <label htmlFor="todo-2">
                Study
              </label>
            </div>
            <div className = {classes.btnGroup}>
              <button aria-label="Study Edit" type="button">
                <FaRegEdit className = {classes.editBtn} />
              </button>
              <button aria-label= "Study Delete" type="button">
                <MdOutlineDeleteSweep className = {classes.deleteBtn} />
              </button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;