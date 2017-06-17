import React, {PropTypes} from 'react';
import '../style/Calculator.css';
import Input from '../conteiners/Input';
import Button from './Button';

const Calculator = ({onStartCalc, answer}) => (
    <div className="calculator">
        <Input className="calculator__input"/>
        <div className="calculator__button" onClick={onStartCalc}>
            <Button>Считать</Button>
        </div>
        <p className="calculator__answer">Ответ:</p>
        <p className="calculator__answer-text">{answer}</p>
    </div>
);

Calculator.propsTypes = {
    onStartCalc: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired
};

export default Calculator;
