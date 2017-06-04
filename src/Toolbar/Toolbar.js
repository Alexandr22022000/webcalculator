import React from 'react';
import './Toolbar.css';
import {PressToolbarButton} from '../scripts/actions';
import { connect } from 'react-redux';

class Toolbar extends React.Component {
    render () {
        return (
            <div className="toolbar">
                <button className={"toolbar__button" + ((this.props.list === "equation") ? " toolbar__button_active" : "")} onClick={() => this.onClick("equation")}>Уравнения</button>
                <button className={"toolbar__button" + ((this.props.list === "calculator") ? " toolbar__button_active" : "")} onClick={() => this.onClick("calculator")}>Калькулятор</button>
                <button className={"toolbar__button" + ((this.props.list === "information") ? " toolbar__button_active" : "")} onClick={() => this.onClick("information")}>Информация</button>
            </div>
        );
    }

    onClick (ButtonType) {
        const action = PressToolbarButton;
        action.button = ButtonType;
        this.props.dispatcher(action);
    }
}

function updataProps (state) {
    return {
        list: state.list
    };
}

export default connect(updataProps)(Toolbar);