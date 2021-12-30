import classes from './App.module.css';
import filterIcon from "../../images/filter-icon.png";

function App() {
  return (
    <div className = {classes.wrappe}>
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

      <div>
        <h2 id="list-heading">4 Tasks</h2>
      </div>

      <ul
        role="list"

        aria-labelledby="list-heading"
      >
        <li >
          <div>
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label htmlFor="todo-0">
              Eat
            </label>
          </div>
          <div>
            <button type="button">
              Edit <span className="visually-hidden">Eat</span>
            </button>
            <button type="button">
              Delete <span className="visually-hidden">Eat</span>
            </button>
          </div>
        </li>

        <li >
          <div>
            <input id="todo-1" type="checkbox" />
            <label htmlFor="todo-1">
              Sleep
            </label>
          </div>
          <div>
            <button type="button">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>

        <li >
          <div>
            <input id="todo-2" type="checkbox" />
            <label htmlFor="todo-2">
              Study
            </label>
          </div>
          <div>
            <button type="button">
              Edit <span className="visually-hidden">Study</span>
            </button>
            <button type="button">
              Delete <span className="visually-hidden">Study</span>
            </button>
          </div>
        </li>
      </ul>

    </div>
  );
}

export default App;