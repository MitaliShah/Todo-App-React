import React from 'react'
import ToDoItem from './components/ToDoItem'
import todosData from './todosData'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todosData            
        }        
    }
    render(){
        const todoItems = this.state.todosData.map(item => <ToDoItem key={item.id}item={item}/>)
    return(
        <div className="todo-list">
           {todoItems}
        </div>
    )
    }
    
}

export default App