import React, { useState } from "react";
import classes from "./Form.module.css";

function Form(props){

  /* STATES */
  const [taskName, setTaskName] = useState('');

  /* WHEN USER ENTERS SOMETHING IN THE TEXT INPUT FIELD THIS FUNCTION IS CALLED */
  function handleChange(e){
    setTaskName(e.target.value);
  }

  /* WHEN USER SUBMITS THE FORM THIS FUNCTION CHECKS IF THE INPUT FIELD IS EMPTY OR NOT
    IF IT IS NOT EMPTY IT WILL SEND DATA TO THE DATABASE USING THE FUNCTION ADDNEWTASK()
    ELSE IT WILL SHOW AN ALERT TO THE USER
  */
  function handleSubmit(e){
    e.preventDefault();

    if(taskName !== ""){
      props.addNewTask(taskName);
      setTaskName("");
    }
    else{
      alert("Please enter something!!!");
    }
  }

  return (
    <form className={classes.wrapperForm} onSubmit = {handleSubmit}>

      <input
        type="text"
        id="new-task-input"
        placeholder='Create a new task!'
        name='new-task-input'
        autoComplete='off'
        value={taskName}
        onChange={handleChange}
      />

      <button type='submit'>
        Add Task
      </button>

    </form>
  );
};

export default Form;