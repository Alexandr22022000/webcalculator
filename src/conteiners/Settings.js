import Settings from '../components/Settings';
import {connect} from 'react-redux';
import {changeSettings, openCloseSettings} from '../actions/actions';
import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';

const mapStateToProps = (state) => ({
    open: state.interfaceState.settingsIsOpen,
    settingSqr: state.calcState.settings[SQR],
    settingFraction: state.calcState.settings[FRACTION],
    settingShortFraction: state.calcState.settings[SHORT_FRACTION]
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