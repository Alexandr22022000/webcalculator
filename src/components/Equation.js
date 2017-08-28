import React from 'react';
import '../style/Equation.css';
import Answer from '../components/Answer';

const Equation = ({onOpenSettings, onStartCalc, answer, isMobile}) => (
    <div className="equation">
        <textarea className={isMobile ? "equation__input-mobile" : "equation__input"} id="equation__input"/>
        <table className="equation__table">
            <td>
                <tr className={isMobile ? "equation__left-button-mobile" : "equation__left-button"}>
                    <button className={isMobile ? "equation__button-mobile" : "equation__button"} onClick={onOpenSettings}>Настройки</button>
                </tr>
                <tr className={isMobile ? "equation__right-button-mobile" : "equation__right-button"}>
                    <button className={isMobile ? "equation__button-mobile" : "equation__button"} onClick={() => onStartCalc(document.getElementById('equation__input').value)}>Решить</button>
                </tr>
            </td>
        </table>
        <Answer answer={answer} isMobile={isMobile}/>
    </div>
);

export default Equation;