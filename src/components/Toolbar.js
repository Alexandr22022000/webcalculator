import React from 'react';
import selectClassName from '../scripts/selectClassName';
import {EDUCATION_LIST, CALCULATOR_LIST, INFORMATION_LIST} from '../constants/listTypes';

const Toolbar = ({list, onClick}) => (
    <div className="toolbar">
        <button
            className={selectClassName('toolbar__button') + ((list === EDUCATION_LIST) ? selectClassName(' toolbar__button_active') : "")}
            onClick={() => onClick(EDUCATION_LIST)}>
                Уравнения
        </button>
        <button
            className={selectClassName('toolbar__button') + ((list === CALCULATOR_LIST) ? selectClassName(' toolbar__button_active') : "")}
            onClick={() => onClick(CALCULATOR_LIST)}>
                Калькулятор
        </button>
        <button
            className={selectClassName('toolbar__button') + ((list === INFORMATION_LIST) ? selectClassName(' toolbar__button_active') : "")}
            onClick={() => onClick(INFORMATION_LIST)}>
                Информация
        </button>
    </div>
);

export default Toolbar;