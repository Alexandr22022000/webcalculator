import React from 'react';
import '../style/ListsFilter.css';
import {EDUCATION_LIST, CALCULATOR_LIST, INFORMATION_LIST} from '../constants/listTypes';
import Settings from '../conteiners/Settings';
import Equation from '../conteiners/Equation';
import Calculator from '../conteiners/Calculator';
import Information from '../conteiners/Information';

const ListsFilter = ({listIndex, isMobile}) => {
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
            <div className={isMobile ? "lists-filter__content-mobile" : "lists-filter__content"}>
                <div className={isMobile ? "lists-filter__container-mobile" : "lists-filter__container"}>
                    { list }
                </div>
            </div>
        </div>
    );
};

export default ListsFilter;
