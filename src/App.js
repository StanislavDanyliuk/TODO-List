import React from 'react';
import Todo from './containers/todo';
import './main.scss';
class App extends React.Component {

  render() {
    return (
      <div className="container App">
        <Todo />
      </div>
    );
  }
}

export default App;
