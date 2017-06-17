import Calculator from '../components/Calculator';
import {connect} from 'react-redux';
import {startCalc} from '../actions/actions';


const mapStateToProps = (state) => ({
    answer: state.calcState.answer.lineAnswer
});

const mapDispatchToProps = (dispatch) => ({
    onStartCalc () {
        dispatch(startCalc());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);