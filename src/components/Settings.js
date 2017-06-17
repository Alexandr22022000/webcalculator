import React, {PropTypes} from 'react';
import '../style/Settings.css';
import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';

const Settings = ({onChangeSettings, onClose, open, settingSqr, settingFraction, settingShortFraction}) => (
    <div className={"settings" + (open ? "" : " settings_hidden")}>
        <div className={"settings__container" + (open ? "" : " settings__container_close")}>
            <a className="settings__close-button" onClick={onClose}>✕</a>
            <div>
                <tr>
                    <td>
                        <a className="settings__text">Всегда выносить квадратный корень</a>
                    </td>
                    <td>
                        <div className={"settings__checkbox-container" + (settingSqr ? " settings__checkbox-container_active" : "")}>
                            <label className={"settings__checkbox" + (settingSqr ? " settings__checkbox_active" : "")} onClick={() => onChangeSettings(SQR)}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a className="settings__text">Использовать обыкновенные дроби</a>
                    </td>
                    <td>
                        <div className={"settings__checkbox-container" + (settingFraction ? " settings__checkbox-container_active" : "")}>
                            <label className={"settings__checkbox" + (settingFraction ? " settings__checkbox_active" : "")} onClick={() => onChangeSettings(FRACTION)}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a className="settings__text">Сокращять дроби</a>
                    </td>
                    <td>
                        <div className={"settings__checkbox-container" + (settingShortFraction  ? " settings__checkbox-container_active" : "")}>
                            <label className={"settings__checkbox" + (settingShortFraction ? " settings__checkbox_active" : "")} onClick={() => onChangeSettings(SHORT_FRACTION)}/>
                        </div>
                    </td>
                </tr>
            </div>
        </div>
    </div>
);

Settings.propsTypes = {
    onChangeSettings: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    settingSqr: PropTypes.bool.isRequired,
    settingFraction: PropTypes.bool.isRequired,
    settingShortFraction: PropTypes.bool.isRequired
};

export default Settings;