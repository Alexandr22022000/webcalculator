import Input from '../components/Input';
import {connect} from 'react-redux';
import {changeInputText} from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
    onChange (text) {
        dispatch(changeInputText(text));
    }
});

export default connect(null, mapDispatchToProps)(Input);