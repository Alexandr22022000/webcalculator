import React, {PropTypes} from 'react';
import '../style/Answer.css';

const Answer = ({line1, line2, line3, line4Top, line4, line4Bottom, line5, line6Top, line6, line6Bottom, lineAnswer}) => (
    <div className="answer">
        <p className="answer__text">{line1}</p>
        <p className="answer__text">{line2}</p>
        <p className="answer__text">{line3}</p>
        <p className="answer__text-up">{line4Top}</p>
        <p className="answer__text">{line4}</p>
        <p className="answer__text-down">{line4Bottom}</p>
        <p className="answer__text">{line5}</p>
        <p className="answer__text-up">{line6Top}</p>
        <p className="answer__text">{line6}</p>
        <p className="answer__text-down">{line6Bottom}</p>
        <p className="answer__text-report">Ответ:</p>
        <p className="answer__text">{lineAnswer}</p>
    </div>
);

Answer.propsTypes = {
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string.isRequired,
    line3: PropTypes.string.isRequired,
    line4: PropTypes.string.isRequired,
    line4Top: PropTypes.string.isRequired,
    line4Bottom: PropTypes.string.isRequired,
    line5: PropTypes.string.isRequired,
    line6: PropTypes.string.isRequired,
    line6Top: PropTypes.string.isRequired,
    line6Bottom: PropTypes.string.isRequired,
    lineAnswer: PropTypes.string.isRequired,
};

export default Answer;