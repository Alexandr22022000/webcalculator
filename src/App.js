import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Toolbar from './Toolbar/Toolbar';
import Equation from './Equation/Equation';
import Calculator from './Calculator/Calculator';
import Information from './Infornation/Information';
import Settings from './Settings/Settings';

class App extends Component {
  render() {
      let list;
      switch (this.props.list) {
          case "equation":
              list = <Equation dispatcher={this.props.dispatcher}/>;
              break;

          case "calculator":
              list = <Calculator dispatcher={this.props.dispatcher}/>;
              break;

          case "information":
              list = <Information/>;
              break;

          default:
              list = <Equation dispatcher={this.props.dispatcher}/>;
              break;
      }

      return (
          <div className="App">
              <Toolbar dispatcher={this.props.dispatcher}/>
              {(this.props.list === "equation") ? <Settings dispatcher={this.props.dispatcher}/> : ""}
              <div className="App__content">
                  <div className="App__container">
                        { list }
                  </div>
              </div>
          </div>
      );
  }
}

function updateProps (state) {
    return {
        list: state.list
    };
}

export default connect(updateProps)(App);
