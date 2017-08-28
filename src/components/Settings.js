import React from 'react';
import '../style/Settings.css';
import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';

class Settings extends React.Component {
    render() {
        return (
            <div className={(this.props.isMobile ? "settings-mobile" : "settings") + (this.props.open ? "" : " settings_hidden")}>
                <div className={(this.props.isMobile ? "settings__container-mobile" : "settings__container") + (this.props.open ? "" : (this.props.isMobile ? " settings__container-mobile_close" : " settings__container_close"))}>
                    <a className={this.props.isMobile ? "settings__close-button-mobile" : "settings__close-button"} onClick={this.props.onClose}>✕</a>
                    <div>
                        {this.itemBuilder("Всегда выносить квадратный корень", SQR)}
                        {this.itemBuilder("Использовать обыкновенные дроби", FRACTION)}
                        {this.itemBuilder("Сокращять дроби", SHORT_FRACTION)}
                    </div>
                </div>
            </div>
        );
    }

    itemBuilder(text, type) {
        return (
            <tr>
                <td>
                    <a className={this.props.isMobile ? "settings__text-mobile" : "settings__text"}>{text}</a>
                </td>
                <td>
                    <div className={(this.props.isMobile ? "settings__checkbox-container-mobile" : "settings__checkbox-container") + (this.props.settingsState[type] ? " settings__checkbox-container_active" : "")}>
                        <label
                            className={(this.props.isMobile ? "settings__checkbox-mobile" : "settings__checkbox") + (this.props.settingsState[type] ? (this.props.isMobile ? " settings__checkbox-mobile_active" : " settings__checkbox_active") : "")}
                            onClick={() => this.props.onChangeSettings(type)}/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Settings;