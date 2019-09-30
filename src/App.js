import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { matcherHint } from 'jest-matcher-utils';



const data = [
  {
    task: 'Test 1',
    id: 0,
    completed: false
  },
  {
    task: 'Test 2',
    id: 1,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Matt',
      data: data
    };
  }

  addTask = taskContent => {
    const newTask = {
      task: taskContent,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTask]
    });
  }


  render() {
    return (
      <div>
        <h2>Welcome to {this.state.name}'s Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList data={this.state.data} />
      </div>
    );
  }
}

export default App;
