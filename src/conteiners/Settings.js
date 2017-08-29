import Settings from '../components/Settings';
import {connect} from 'react-redux';
import {changeSettings, openCloseSettings} from '../actions/actions';

const mapStateToProps = (state) => ({
    open: state.interfaceState.settingsIsOpen,
    settingsState: state.calcState.settings
});

const mapDispatchToProps = (dispatch) => ({
    onChangeSettings(type) {
        dispatch(changeSettings(type));
    },

    onClose() {
        dispatch(openCloseSettings());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);