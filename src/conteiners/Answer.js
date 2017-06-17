import Answer from '../components/Answer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    line1: state.calcState.answer.line1,
    line2: state.calcState.answer.line2,
    line3: state.calcState.answer.line3,
    line4: state.calcState.answer.line4,
    line4Top: state.calcState.answer.line4Top,
    line4Bottom: state.calcState.answer.line4Bottom,
    line5: state.calcState.answer.line5,
    line6: state.calcState.answer.line6,
    line6Top: state.calcState.answer.line6Top,
    line6Bottom: state.calcState.answer.line6Bottom,
    lineAnswer: state.calcState.answer.lineAnswer,
});

export default connect(mapStateToProps)(Answer);