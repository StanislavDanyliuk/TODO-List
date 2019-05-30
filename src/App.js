import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import './main.scss'

class App extends React.Component {

  render() {
    return (
      <div className="container App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="*" exact component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
