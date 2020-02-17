import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from "../components/navBar";

import home from '../views/home';
import login from '../views/login';
import signUp from '../views/signup';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar/>
          <div className="container">
              <Switch>
                  <Route exact path="/" component={home}/>
                  <Route exact path="/login" component={login}/>
                  <Route exact path="/signup" component={signUp}/>
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
