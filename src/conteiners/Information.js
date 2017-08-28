import Information from '../components/Information';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    isMobile: state.interfaceState.isMobile
});

export default connect(mapStateToProps)(Information);