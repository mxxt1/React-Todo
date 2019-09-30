import React, { Component } from 'react'

export class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            task: ''
        };
    }
    
    handleChanges = event => {
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
                <input type='text' value={this.task} name='task' onChange={this.handleChanges} placeholder='Enter your task' />
                <button>Submit Task</button>
            </form>
        )
    }
}

export default TodoForm
