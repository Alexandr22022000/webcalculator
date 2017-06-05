import React from 'react';
import './Answer.css';
import { connect } from 'react-redux';

class Answer extends React.Component {
    render () {
        return (
            <div className="answer">
                <p className="answer__text">{this.props.output.line1}</p>
                <p className="answer__text">{this.props.output.line2}</p>
                <p className="answer__text">{this.props.output.line3}</p>
                <p className="answer__text-up">{this.props.output.line4Top}</p>
                <p className="answer__text">{this.props.output.line4}</p>
                <p className="answer__text-down">{this.props.output.line4Bottom}</p>
                <p className="answer__text">{this.props.output.line5}</p>
                <p className="answer__text-up">{this.props.output.line6Top}</p>
                <p className="answer__text">{this.props.output.line6}</p>
                <p className="answer__text-down">{this.props.output.line6Bottom}</p>
                <p className="answer__text-report">Ответ:</p>
                <p className="answer__text">{this.props.output.lineAnswer}</p>
            </div>
        );
    }
}

function updateProps (state) {
    return {
        output: state.output,
    };
}

export default connect(updateProps)(Answer);