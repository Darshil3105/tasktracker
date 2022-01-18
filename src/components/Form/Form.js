import React from "react";
import classes from "./Form.module.css";

function Form(props){
    return(
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
    );
};

export default Form;