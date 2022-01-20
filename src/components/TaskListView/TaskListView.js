import React from "react";
import classes from "./TaskListView.module.css";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

function TaskListView(props){

    /* COMPONENT TO DISPLAY ALL THE TASKS WITH CHECKBOX AND EDIT AS WELL AS DELETE BUTTONS */
    return(
        <>
            <div className={classes.listItems}>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completeStatus}
                    onChange={() => props.updateTaskCompleteStatus(props.id, props.taskName, props.completeStatus)}
                />
                <label htmlFor={props.id}>
                    {props.taskName}
                </label>
            </div>

            <div className={classes.btnGroup}>
                <button aria-label={"Edit" + props.taskName} type="button" onClick={() => props.editBtnPressed()}>
                    <FaRegEdit className={classes.editBtn} />
                </button>
                <button aria-label={"Delete" + props.taskName} type="button" onClick={() => props.deleteTask(props.id)}>
                    <MdOutlineDeleteSweep className={classes.deleteBtn} />
                </button>
            </div>
        </>
    );
}

export default TaskListView;