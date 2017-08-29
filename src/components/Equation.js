import React from 'react';
import selectClassName from '../scripts/selectClassName';
import Answer from '../components/Answer';

const Equation = ({onOpenSettings, onStartCalc, answer}) => (
    <div className={selectClassName('equation')}>
        <textarea className={selectClassName('equation__input')} id="equation__input"/>
        <table className={selectClassName('equation__table')}>
            <td>
                <tr className={selectClassName('equation__left-button')}>
                    <button className={selectClassName('equation__button')} onClick={onOpenSettings}>Настройки</button>
                </tr>
                <tr className={selectClassName('equation__right-button')}>
                    <button className={selectClassName('equation__button')} onClick={() => onStartCalc(document.getElementById('equation__input').value)}>Решить</button>
                </tr>
            </td>
        </table>
        <Answer answer={answer}/>
    </div>
);

export default Equation;