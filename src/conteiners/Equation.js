import Equation from '../components/Equation';
import {connect} from 'react-redux';
import {openCloseSettings, startCalcEquation} from '../actions/actions';

const mapStateToProps = (state) => ({
    answer: state.calcState.answerEquation
});

const mapDispatchToProps = (dispatch) => ({
    onStartCalc (text) {
        dispatch(startCalcEquation(text));
    },

    onOpenSettings() {
        dispatch(openCloseSettings());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Equation);