import React from 'react'
import ToDoItem from './components/ToDoItem'
import todosData from './todosData'

function App(){
    const todoItems = todosData.map(item => <ToDoItem key={item.id}item={item}/>)
    return(
        <div className="todo-list">
           {todoItems}
        </div>
    )
}

export default App