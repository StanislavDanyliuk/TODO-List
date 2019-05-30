import React from 'react';
import List from './List';
import AddForm from './AddForm';

class HomePage extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Test 1'
      },
      {
        id: 2,
        content: 'Test 2'
      },
      {
        id: 3,
        content: 'Test 3'
      },
      {
        id: 4,
        content: 'Test 4'
      },
      {
        id: 5,
        content: 'Test 5'
      },
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="container todo-app">
        <h1 className='center blue-text'>
          My Todo's:
        </h1>
        <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default HomePage;
