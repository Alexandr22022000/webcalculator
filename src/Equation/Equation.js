import React from 'react';
import './Equation.css';
import { SettingsOpenClose, CalcEquation } from '../scripts/actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Answer from '../Answer/Answer';

class Equation extends React.Component {
    render () {
        return (
            <div className="equation">
                <Input className="equation__input" dispatcher={this.props.dispatcher}/>
                <table className="equation__table">
                    <td>
                        <tr className="equation__left-button">
                            <Button content="Настройки" onClick={() => this.props.dispatcher(SettingsOpenClose)}/>
                        </tr>
                    </td>
                    <td>
                        <tr className="equation__right-button">
                            <Button content="Решить" onClick={() => this.props.dispatcher(CalcEquation)}/>
                        </tr>
                    </td>
                </table>
                <Answer/>
            </div>
        );
    }
}

export default Equation;