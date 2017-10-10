import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import PropTypes from 'prop-types'
import Routes from './routes'
import NavBar from './components/ui/NavBar'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <NavBar />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
