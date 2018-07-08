import React, { Component } from 'react';
import classes from './App.css';
import Customizer from '../components/customizer/customizer.js'

class App extends Component {
  state = {

  }

  render() {
    return (
      <div className={classes.App}>
        <Customizer/>
      </div>
    );
  }
}

export default App;
