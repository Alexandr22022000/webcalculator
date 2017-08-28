import ListsFilter from '../components/ListsFilter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    listIndex: state.interfaceState.list,
    isMobile: state.interfaceState.isMobile
});

export default connect(mapStateToProps)(ListsFilter);