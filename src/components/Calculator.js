import React from 'react';
import selectClassName from '../scripts/selectClassName';

const Calculator = ({onStartCalc, answer}) => (
    <div className="calculator">
        <textarea className={selectClassName('calculator__input')} id="calculator__input"/>
        <div className={selectClassName('calculator__button-container')}>
            <button className={selectClassName('calculator__button')} onClick={() => onStartCalc(document.getElementById('calculator__input').value)}>Считать</button>
        </div>
        <p className={selectClassName('calculator__answer')}>Ответ:</p>
        <p className={selectClassName('calculator__answer-text')}>{answer}</p>
    </div>
);

export default Calculator;
