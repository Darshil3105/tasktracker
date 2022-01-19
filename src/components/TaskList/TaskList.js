import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import classes from "./TaskList.module.css";

function TaskList(props){
    return(
        <>
            <li>
                <div className={classes.listItems}>
                    <input
                        id = {props.id}
                        type="checkbox"
                        defaultChecked = {props.completed}
                        onChange = {() => props.updateTaskCompleteStatus(props.id,props.taskName,props.completed)}
                    />
                    <label htmlFor = {props.id}>
                        {props.taskName}
                    </label>
                </div>

                <div className={classes.btnGroup}>
                    <button aria-label = {"Edit" + props.taskName} type="button">
                        <FaRegEdit className={classes.editBtn} />
                    </button>
                    <button aria-label = {"Delete" + props.taskName} type="button" onClick = {() => props.deleteTask(props.id)}>
                        <MdOutlineDeleteSweep className={classes.deleteBtn} />
                    </button>
                </div>
            </li>
        </>
    );
}

export default TaskList;