import React, {PropTypes} from 'react';
import '../style/ListsFilter.css';
import {EDUCATION_LIST, CALCULATOR_LIST, INFORMATION_LIST} from '../constants/listTypes';
import Settings from '../conteiners/Settings';
import Equation from '../conteiners/Equation';
import Calculator from '../conteiners/Calculator';
import Information from './Information';

const ListsFilter = ({listIndex}) => {
    let list;
    switch (listIndex) {
        case EDUCATION_LIST:
            list = <Equation/>;
            break;

        case CALCULATOR_LIST:
            list = <Calculator/>;
            break;

        case INFORMATION_LIST:
            list = <Information/>;
            break;

        default:
            list = <Equation/>;
            break;
    }

    return (
        <div className="lists-filter">
            {(listIndex === EDUCATION_LIST) ? <Settings/> : ""}
            <div className="lists-filter__content">
                <div className="lists-filter__container">
                    { list }
                </div>
            </div>
        </div>
    );
};

ListsFilter.propsTypes = {
    listIndex: PropTypes.string.isRequired
};

export default ListsFilter;
