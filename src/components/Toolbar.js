import React from 'react';
import '../style/Toolbar.css';
import {EDUCATION_LIST, CALCULATOR_LIST, INFORMATION_LIST} from '../constants/listTypes';

const Toolbar = ({list, onClick, isMobile}) => (
    <div className="toolbar">
        <button
            className={(isMobile ? "toolbar__button-mobile" : "toolbar__button") + ((list === EDUCATION_LIST) ? " toolbar__button_active" : "")}
            onClick={() => onClick(EDUCATION_LIST)}>
                Уравнения
        </button>
        <button
            className={(isMobile ? "toolbar__button-mobile" : "toolbar__button") + ((list === CALCULATOR_LIST) ? " toolbar__button_active" : "")}
            onClick={() => onClick(CALCULATOR_LIST)}>
                Калькулятор
        </button>
        <button
            className={(isMobile ? "toolbar__button-mobile" : "toolbar__button") + ((list === INFORMATION_LIST) ? " toolbar__button_active" : "")}
            onClick={() => onClick(INFORMATION_LIST)}>
                Информация
        </button>
    </div>
);

export default Toolbar;