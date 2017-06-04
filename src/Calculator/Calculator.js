import React from 'react';
import './Calculator.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Calc } from '../scripts/actions';
import { connect } from 'react-redux';


class Calculator extends React.Component {
    render () {
        return (
            <div className="calculator">
                <Input className="calculator__input" dispatcher={this.props.dispatcher}/>
                <div className="calculator__button" onClick={() => this.props.dispatcher(Calc)}>
                    <Button content="Считать"/>
                </div>
                <p className="calculator__answer">Ответ:</p>
                <p className="calculator__answer-text">{this.props.text}</p>
            </div>
        );
    }
}

function updateProps (state) {
    return {
        text: state.output.line1
    };
}

export default connect(updateProps)(Calculator);