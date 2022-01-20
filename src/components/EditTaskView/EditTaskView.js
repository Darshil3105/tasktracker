import React, { useState } from 'react';
import classes from './EditTaskView.module.css';
import { BsCheck2All } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

function EditTask(props) {

    /* STATES */
    const [newName, setNewName] = useState("");

    /* WHEN USER ENTERS SOMETHING IN THE TEXT INPUT FIELD THIS FUNCTION IS CALLED */
    const handleChange = (e) => {
        setNewName(e.target.value);
    }

    /* WHEN USER SUBMITS THE EDITING FORM FUNCTION SENDS ALL THE UDATED DATA TO THE SERVER AND SETS THE SCREEN TO THE TASKLISTVIEW */
    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateTaskFunction(props.id, newName, props.completeStatus)
        setNewName("");
        props.cancelBtnPressed();
    }

    return(
        <div className = {classes.editContainer}>
            <form className={`${classes.editFormContainer} ${classes.animate}`} onSubmit = {handleSubmit}>

                <div className = {classes.container}>
                    <input
                        id = {props.id}
                        type = "text"
                        name = "Edit Task Name"
                        placeholder = {"New Name of " + props.taskName}
                        autoComplete = 'off'
                        aria-label = {"New Name of " + props.taskName}
                        value = {newName}
                        onChange = {handleChange}
                    />
                </div>

                <div className={classes.saveCancelBtn}>
                    <button aria-label={"Save" + props.taskName} type="submit" className = {classes.saveBtnBg}>
                        <BsCheck2All className = {classes.btnCenter} />
                    </button>
                    <button aria-label={"Cancel" + props.taskName} type="button" className = {classes.cancelBtnBg} onClick = {props.cancelBtnPressed}>
                        <MdOutlineCancel className = {classes.btnCenter} />
                    </button>
                </div>

            </form>
        </div>
    );
};

export default EditTask;