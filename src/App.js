import React, { Component } from 'react';
import Toolbar from './conteiners/Toolbar';
import ListsFilter from './conteiners/ListsFilter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar/>
        <ListsFilter/>
      </div>
    );
  }
}

export default App;
