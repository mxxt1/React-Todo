// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react'
import Todo from './Todo'

class TodoList extends Component{
    constructor(props){
        super(props);  
        console.log(props);
    }


    render(){

        return(
            <div>
            {this.props.data.map(task => (
            <Todo key={task.id} id={task.id} task={task.task} completed={task.completed} toggleTask={this.props.toggleTask} />
            ))}
            <button onClick={this.props.clearList}>Clear List</button>
            
            </div>
        );
    }
}



export default TodoList;