import React, {Component} from 'react'
import './Todo.css';


class Todo extends Component {
    constructor(props){
        super(props);
    }

render(){
    return(
        <div 
        onClick={() => this.props.toggleTask(this.props.id)}
        className={`${this.props.completed ? 'completed' : 'task'}`}>
         {this.props.task}
        </div> 
     );




}//render


}//end component


export default Todo