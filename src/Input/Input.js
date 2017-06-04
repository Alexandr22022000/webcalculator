import React from 'react';
import './Input.css';
import { SetInputDate } from '../scripts/actions';

class Input extends React.Component {
    render () {
        return (
            <textarea className={"input " + this.props.className} id="input" onChange={this.onChange.bind(this)}/>
        );
    }

    onChange (e) {
        const action = SetInputDate;
        action.date = document.getElementById("input").value;
        this.props.dispatcher(action);
    }
}

export default Input;