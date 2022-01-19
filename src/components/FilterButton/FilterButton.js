import React from "react";
import classes from "./FilterButton.module.css";

function FilterButton(props){
    return(
        <button type="button" aria-pressed={props.isPressed} onClick = {() => props.setFilter(props.name)}>
            <span className={classes.hiddenText}>Show </span>
            <span>{props.name}</span>
            <span className={classes.hiddenText}> tasks</span>
        </button>
    );
};

export default FilterButton;