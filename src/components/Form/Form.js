import React, { useState } from "react";
import classes from "./Form.module.css";

function Form(props){

  const [taskName, setTaskName] = useState('');

  function handleChange(e){
    setTaskName(e.target.value);
  }

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
        name='text'
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