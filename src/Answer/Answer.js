import React from 'react';
import './Answer.css';
import { connect } from 'react-redux';

class Answer extends React.Component {
    render () {
        return (
            <div className="answer">
                <p className="answer__text">{this.props.line1}</p>
                <p className="answer__text">{this.props.line2}</p>
                <p className="answer__text">{this.props.line3}</p>
                <p className="answer__text-up">{this.props.line4Top}</p>
                <p className="answer__text">{this.props.line4}</p>
                <p className="answer__text-down">{this.props.line4Bottom}</p>
                <p className="answer__text">{this.props.line5}</p>
                <p className="answer__text-up">{this.props.line6Top}</p>
                <p className="answer__text">{this.props.line6}</p>
                <p className="answer__text-down">{this.props.line6Bottom}</p>
                <p className="answer__text-report">Ответ:</p>
                <p className="answer__text">{this.props.lineAnswer}</p>
            </div>
        );
    }
}

function updateProps (state) {
    return {
        line1: state.output.line1,
        line2: state.output.line2,
        line3: state.output.line3,
        line4: state.output.line4,
        line4Top: state.output.line4Top,
        line4Bottom: state.output.line4Bottom,
        line5: state.output.line5,
        line6: state.output.line6,
        line6Top: state.output.line6Top,
        line6Bottom: state.output.line6Bottom,
        lineAnswer: state.output.lineAnswer
    };
}

export default connect(updateProps)(Answer);