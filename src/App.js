import React, { Component } from 'react';
import List from './List'

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <h1 className='center blue-text'>
          My Todo's:
        </h1>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
