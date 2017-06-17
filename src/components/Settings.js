import React from 'react';
import '../style/Settings.css';
import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';

class Settings extends React.Component {
    render() {
        return (
            <div className={"settings" + (this.props.open ? "" : " settings_hidden")}>
                <div className={"settings__container" + (this.props.open ? "" : " settings__container_close")}>
                    <a className="settings__close-button" onClick={this.props.onClose}>✕</a>
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
                    <a className="settings__text">{text}</a>
                </td>
                <td>
                    <div className={"settings__checkbox-container" + (this.props.settingsState[type] ? " settings__checkbox-container_active" : "")}>
                        <label
                            className={"settings__checkbox" + (this.props.settingsState[type] ? " settings__checkbox_active" : "")}
                            onClick={() => this.props.onChangeSettings(type)}/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Settings;