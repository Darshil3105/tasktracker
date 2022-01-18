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
                        id = {[props.id]}
                        type="checkbox"
                        defaultChecked = {props.completed}
                    />
                    <label htmlFor="todo-0">
                        {props.taskName}
                    </label>
                </div>
                
                <div className={classes.btnGroup}>
                    <button aria-label = {props.taskName + "Edit"} type="button">
                        <FaRegEdit className={classes.editBtn} />
                    </button>
                    <button aria-label = {props.taskName + "Delete"} type="button">
                        <MdOutlineDeleteSweep className={classes.deleteBtn} />
                    </button>
                </div>
            </li>

            {/* <li>
                <div className={classes.listItems}>
                    <input id="todo-1" type="checkbox" />
                    <label htmlFor="todo-1">
                        Sleep
                    </label>
                </div>
                <div className={classes.btnGroup}>
                    <button aria-label="Sleep Edit" type="button">
                        <FaRegEdit className={classes.editBtn} />
                    </button>
                    <button aria-label="Sleep Delete" type="button">
                        <MdOutlineDeleteSweep className={classes.deleteBtn} />
                    </button>
                </div>
            </li>

            <li>
                <div className={classes.listItems}>
                    <input id="todo-2" type="checkbox" />
                    <label htmlFor="todo-2">
                        Study
                    </label>
                </div>
                <div className={classes.btnGroup}>
                    <button aria-label="Study Edit" type="button">
                        <FaRegEdit className={classes.editBtn} />
                    </button>
                    <button aria-label="Study Delete" type="button">
                        <MdOutlineDeleteSweep className={classes.deleteBtn} />
                    </button>
                </div>
            </li> */}
        </>
    );
}

export default TaskList;