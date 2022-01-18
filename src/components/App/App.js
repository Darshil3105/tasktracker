import { useState } from 'react';
import classes from './App.module.css';
import Form from '../Form/Form';
import FilterButton from '../FilterButton/FilterButton';
import TaskList from '../TaskList/TaskList';

const FILTER_TYPE = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_BTN_NAME = Object.keys(FILTER_TYPE);

function App() {

  const [filter, setFilter] = useState('All');

  const filterBtnList = FILTER_BTN_NAME.map(name => (
    <FilterButton
      key = {name}
      name = {name}
      isPressed = {name === filter}
    />
  ))

  return (
    <div className = {classes.wrapper}>
      <h1 className = {classes.title}>Task Tracker</h1>

      <Form />

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
          <TaskList />
        </ul>
      </div>

    </div>
  );
}

export default App;