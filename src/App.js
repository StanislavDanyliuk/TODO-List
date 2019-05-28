import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './HomePage';

class App extends React.Component {

  render() {
    return (
      <div className="container App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
