import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import classes from "./TaskList.module.css";

function TaskList(props){
    return(
        <>
            <li>
                <div className={classes.listItems}>
                    <input id="todo-0" type="checkbox" />
                    <label htmlFor="todo-0">
                        Eat
                    </label>
                </div>
                <div className={classes.btnGroup}>
                    <button aria-label="Eat Edit" type="button">
                        <FaRegEdit className={classes.editBtn} />
                    </button>
                    <button aria-label="Eat Delete" type="button">
                        <MdOutlineDeleteSweep className={classes.deleteBtn} />
                    </button>
                </div>
            </li>

            <li>
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
            </li>
        </>
    );
}

export default TaskList;