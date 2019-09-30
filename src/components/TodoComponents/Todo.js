import React from 'react'


const Todo = props => {
    console.log(props);
    console.log(props.toggleTask)
    return(
       <div onClick={() => props.toggleTask(props.id)}>
         <h4>{props.task}</h4>
       </div> 
    );




}

export default Todo