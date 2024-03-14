import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Highscore from './components/Highscore';
import Board from './Board';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/highscore" component={Highscore} />
          <Route path="/" component={Board} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
