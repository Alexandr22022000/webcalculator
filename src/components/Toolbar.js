import React, {PropTypes} from 'react';
import '../style/Toolbar.css';
import {EDUCATION_LIST, CALCULATOR_LIST, INFORMATION_LIST} from '../constants/listTypes';

const Toolbar = ({list, onClick}) => (
    <div className="toolbar">
        <button
            className={"toolbar__button" + ((list === EDUCATION_LIST) ? " toolbar__button_active" : "")}
            onClick={() => onClick(EDUCATION_LIST)}>
                Уравнения
        </button>
        <button
            className={"toolbar__button" + ((list === CALCULATOR_LIST) ? " toolbar__button_active" : "")}
            onClick={() => onClick(CALCULATOR_LIST)}>
                Калькулятор
        </button>
        <button
            className={"toolbar__button" + ((list === INFORMATION_LIST) ? " toolbar__button_active" : "")}
            onClick={() => onClick(INFORMATION_LIST)}>
                Информация
        </button>
    </div>
);

Toolbar.propsTypes = {
    list: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Toolbar;