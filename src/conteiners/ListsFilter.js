import ListsFilter from '../components/ListsFilter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    listIndex: state.interfaceState.list
});

export default connect(mapStateToProps)(ListsFilter);