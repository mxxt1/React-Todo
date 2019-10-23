import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        };
    }
    
    handleChanges = event => {
        // let taskValue = event.target.name
        this.setState({
        [event.target.name]: event.target.value
        });
    };


    taskSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });
    };

    
    
    
    render() {
        return (
            <form onSubmit={this.taskSubmit}>
                <input type='text' value={this.state.task} name='task' onChange={this.handleChanges} placeholder='Enter your task' />
                <button>Submit Task</button>
            </form>
        )
    }
}

export default TodoForm
