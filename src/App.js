import React, {Component} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';



const data = [
  {
    task: 'Seed 1',
    id: 0,
    completed: false
  },
  {
    task: 'Seed 2',
    id: 1,
    completed: false
  }
];



class App extends Component {
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

  clearList = () => {
    console.log(`hit clear list`)
    this.setState({
        data: [{},{}]
    })
}



toggleTask = id => {
  console.log('task was toggled')
  this.setState({
    data: this.state.data.map(task => {
      if (task.id === id) {
        return{...task, completed: !task.completed}
      } else {
        return task;
      }
    })
  })
};


  render() {
    return (
      <div>
        <h2>Welcome to {this.state.name}'s Todo App!</h2>
        <TodoForm addTask={this.addTask}/> 
        <TodoList data={this.state.data} toggleTask={this.toggleTask} clearList={this.clearList} />
      </div>
    );
  }
}

export default App;
