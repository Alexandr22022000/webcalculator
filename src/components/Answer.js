import React from 'react';
import selectClassName from '../scripts/selectClassName';

const Answer = ({answer}) => {
    const {line1 = "", line2 = "", line3 = "", line4Top = "", line4 = "", line4Bottom = "", line5 = "", line6Top = "", line6 = "", line6Bottom = "", lineAnswer = ""} = answer;
    return (
        <div className="answer">
            <p className={selectClassName('answer__text')}>{line1}</p>
            <p className={selectClassName('answer__text')}>{line2}</p>
            <p className={selectClassName('answer__text')}>{line3}</p>
            {line4Top === "" ? "" : <p className={selectClassName('answer__text-up')}>{line4Top}</p>}
            <p className={selectClassName('answer__text')}>{line4}</p>
            {line4Bottom === "" ? "" : <p className={selectClassName('answer__text-down')}>{line4Bottom}</p>}
            <p className={selectClassName('answer__text')}>{line5}</p>
            {line6Top === "" ? "" : <p className={selectClassName('answer__text-up')}>{line6Top}</p>}
            <p className={selectClassName('answer__text')}>{line6}</p>
            {line6Top === "" ? "" : <p className={selectClassName('answer__text-down')}>{line6Bottom}</p>}
            <p className={selectClassName('answer__text-report')}>Ответ:</p>
            <p className={selectClassName('answer__text')}>{lineAnswer}</p>
        </div>
    );
};

export default Answer;