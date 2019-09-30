// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {


    return(
        <div>
        {props.data.map(task => (
        <Todo key={task.id} id={task.id} task={task.task} completed={task.completed} toggleTask={props.toggleTask} />
        ))}
        <button onClick={props.clearList}>Clear List</button>
        
        </div>
    );



}


export default TodoList;