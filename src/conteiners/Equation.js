import Equation from '../components/Equation';
import {connect} from 'react-redux';
import {openCloseSettings, startCalcEquation} from '../actions/actions';

const mapStateToProps = (state) => ({
      answer: state.calcState.answer
});

const mapDispatchToProps = (dispatch) => ({
    onStartCalc () {
        dispatch(startCalcEquation());
    },

    onOpenSettings() {
        dispatch(openCloseSettings());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Equation);