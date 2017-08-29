import React from 'react';
import selectClassName from '../scripts/selectClassName';
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
        <div className={selectClassName('lists-filter')}>
            {(listIndex === EDUCATION_LIST) ? <Settings/> : ""}
            <div className={selectClassName('lists-filter__content')}>
                <div className={selectClassName('lists-filter__container')}>
                    { list }
                </div>
            </div>
        </div>
    );
};

export default ListsFilter;
