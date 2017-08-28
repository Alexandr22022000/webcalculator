import React, { Component } from 'react';
import {connect} from 'react-redux';
import {startApp} from "./actions/actions";
import Toolbar from './conteiners/Toolbar';
import ListsFilter from './conteiners/ListsFilter';
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.start();
  }

  render() {
    return (
      <div className={this.props.isMobile ? "App-mobile" : "App"}>
        <Toolbar/>
        <ListsFilter/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    isMobile: state.interfaceState.isMobile
});

const mapDispatchToProps = (dispatch) => ({
    start () {
        dispatch(startApp());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
