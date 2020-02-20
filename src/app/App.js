import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from "../components/navBar";

import home from '../views/home';
import login from '../views/login';
import signUp from '../views/signup';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#33c9dc',
            main: '#00bcd4',
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff',
        }
    }
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
  );
}

export default App;
