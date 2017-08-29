import React, { Component } from 'react';
import selectClassName from './scripts/selectClassName';
import Toolbar from './conteiners/Toolbar';
import ListsFilter from './conteiners/ListsFilter';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className={selectClassName('App')}>
        <Toolbar/>
        <ListsFilter/>
      </div>
    );
  }
}

export default App;
