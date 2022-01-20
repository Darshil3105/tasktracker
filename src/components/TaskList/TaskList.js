import React, { useState } from "react";
import EditTaskView from "../EditTaskView/EditTaskView";
import TaskListView from "../TaskListView/TaskListView";

function TaskList(props){

    /* STATES */
    const [isEditing, setEditing] = useState(false);

    /* DISPLAYS THE TASK EDITING FORM */
    const editingView = (
        <EditTaskView id = {props.id} taskName = {props.taskName} updateTaskFunction = {props.updateTask} completeStatus = {props.completed} cancelBtnPressed = {() => setEditing(false)} />
    )

    /* DISPLAYS THE TASK LIST */
    const taskListView = (

        <TaskListView id = {props.id} taskName = {props.taskName} updateTaskCompleteStatus = {props.updateTaskCompleteStatus} completeStatus = {props.completed} editBtnPressed = {() => setEditing(true)} deleteTask = {props.deleteTask} />
    );

    return(
        <>
            <li>
                {
                    /* BASED ON THE BOOLEAN VALUE OF THE ISEDITING STATE IT WILL DISPLAY THE RESPECTIVE VIEW TO THE USER */
                    isEditing ? editingView : taskListView
                }
            </li>
        </>
    );
}

export default TaskList;