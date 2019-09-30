import React from 'react'
import './Todo.css';


const Todo = props => {
    console.log(props);
    return(
       <div 
       onClick={() => props.toggleTask(props.id)}
       className={`${props.completed ? 'completed' : 'task'}`}>
        {props.task}
       </div> 
    );




}

export default Todo