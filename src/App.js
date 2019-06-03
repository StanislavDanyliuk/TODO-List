import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todo from './containers/todo';
import NotFoundPage from './components/NotFoundPage'
import logIn from './components/logIn';
import './main.scss';
class App extends React.Component {

  render() {
    return (
      <div className="container App">
        <Router>
          <Switch>
            <Route exact path='/' component={Todo} />
            <Route exact path='/login' component={logIn} />
            <Route path='*' component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
