import React from 'react';
import selectClassName from '../scripts/selectClassName';
import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';

class Settings extends React.Component {
    render() {
        return (
            <div className={selectClassName('settings') + (this.props.open ? "" : selectClassName(' settings_hidden'))}>
                <div className={selectClassName('settings__container') + (this.props.open ? "" : selectClassName(' settings__container_close'))}>
                    <a className={selectClassName('settings__close-button')} onClick={this.props.onClose}>✕</a>
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
                    <a className={selectClassName('settings__text')}>{text}</a>
                </td>
                <td>
                    <div className={selectClassName('settings__checkbox-container') + (this.props.settingsState[type] ? selectClassName(' settings__checkbox-container_active') : "")}>
                        <label
                            className={selectClassName('settings__checkbox') + (this.props.settingsState[type] ? selectClassName(' settings__checkbox_active') : "")}
                            onClick={() => this.props.onChangeSettings(type)}/>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Settings;