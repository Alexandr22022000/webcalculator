import React, {PropTypes} from 'react';
import '../style/Equation.css';
import Answer from '../conteiners/Answer';
import Input from '../conteiners/Input';
import Button from './Button';

const Equation = ({onOpenSettings, onStartCalc}) => (
    <div className="equation">
        <Input className="equation__input"/>
        <table className="equation__table">
            <td>
                <tr className="equation__left-button">
                    <Button onClick={onOpenSettings}>Настройки</Button>
                </tr>
            </td>
            <td>
                <tr className="equation__right-button">
                    <Button onClick={onStartCalc}>Решить</Button>
                </tr>
            </td>
        </table>
        <Answer/>
    </div>
);

Equation.propsTypes = {
    onStartCalc: PropTypes.func.isRequired,
    onOpenSettings: PropTypes.func.isRequired
};

export default Equation;