import Calculator from '../components/Calculator';
import {connect} from 'react-redux';
import {startCalc} from '../actions/actions';


const mapStateToProps = (state) => ({
    answer: state.calcState.answerCalc,
    isMobile: state.interfaceState.isMobile
});

const mapDispatchToProps = (dispatch) => ({
    onStartCalc (text) {
        dispatch(startCalc(text));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);