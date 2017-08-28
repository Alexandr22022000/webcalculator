import React from 'react';
import '../style/Calculator.css';

const Calculator = ({onStartCalc, answer, isMobile}) => (
    <div className="calculator">
        <textarea className={isMobile ? "calculator__input-mobile" : "calculator__input"} id="calculator__input"/>
        <div className="calculator__button-container">
            <button className={isMobile ? "calculator__button-mobile" : "calculator__button"} onClick={() => onStartCalc(document.getElementById('calculator__input').value)}>Считать</button>
        </div>
        <p className={isMobile ? "calculator__answer-mobile" : "calculator__answer"}>Ответ:</p>
        <p className={isMobile ? "calculator__answer-text-mobile" : "calculator__answer-text"}>{answer}</p>
    </div>
);

export default Calculator;
