import Toolbar from '../components/Toolbar';
import {connect} from 'react-redux';
import {changeList} from '../actions/actions';

const mapStateToProps = (state) => ({
    list: state.interfaceState.list
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick(newList) {
        dispatch(changeList(newList));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);