import React from 'react';
import '../style/Answer.css';

const Answer = ({answer, isMobile}) => {
    const {line1 = "", line2 = "", line3 = "", line4Top = "", line4 = "", line4Bottom = "", line5 = "", line6Top = "", line6 = "", line6Bottom = "", lineAnswer = ""} = answer;
    return (
        <div className="answer">
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{line1}</p>
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{line2}</p>
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{line3}</p>
            {line4Top === "" ? "" : <p className={isMobile ? "answer__text-up-mobile" : "answer__text-up"}>{line4Top}</p>}
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{line4}</p>
            {line4Bottom === "" ? "" : <p className={isMobile ? "answer__text-down-mobile" : "answer__text-down"}>{line4Bottom}</p>}
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{line5}</p>
            {line6Top === "" ? "" : <p className={isMobile ? "answer__text-up-mobile" : "answer__text-up"}>{line6Top}</p>}
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{line6}</p>
            {line6Top === "" ? "" : <p className={isMobile ? "answer__text-down-mobile" : "answer__text-down"}>{line6Bottom}</p>}
            <p className={isMobile ? "answer__text-report-mobile" : "answer__text-report"}>Ответ:</p>
            <p className={isMobile ? "answer__text-mobile" : "answer__text"}>{lineAnswer}</p>
        </div>
    );
};

export default Answer;