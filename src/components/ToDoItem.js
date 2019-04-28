import React from 'react'

/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */

function ToDoItem(props){

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
    <div className="todo-item">
        <input type="checkbox" checked={props.item.completed} onChange={()=> props.handleChange(props.item.id)}/>
        <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
    )

}

export default ToDoItem