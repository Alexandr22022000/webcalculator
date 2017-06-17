import Equation from '../components/Equation';
import {connect} from 'react-redux';
import {openCloseSettings, startCalcEquation} from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
    onStartCalc () {
        dispatch(startCalcEquation());
    },

    onOpenSettings() {
        dispatch(openCloseSettings());
    }
});

export default connect(null, mapDispatchToProps)(Equation);