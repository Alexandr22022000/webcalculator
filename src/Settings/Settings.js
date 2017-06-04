import React from 'react';
import { connect } from 'react-redux';
import './Settings.css';
import { SetSettings, SettingsOpenClose } from '../scripts/actions';

class Settings extends React.Component {
    render () {
        return (
            <div className={"settings" + (this.props.open ? "" : " settings_hidden")}>
                <div className={"settings__container" + (this.props.open ? "" : " settings__container_close")}>
                    <a className="settings__close-button" onClick={() => this.props.dispatcher(SettingsOpenClose)}>✕</a>
                    <div>
                        <tr>
                            <td>
                                <a className="settings__text">Всегда выносить квадратный корень</a>
                            </td>
                            <td>
                                <div className={"settings__checkbox-container" + (this.props.settingSqr ? " settings__checkbox-container_active" : "")}>
                                    <label className={"settings__checkbox" + (this.props.settingSqr ? " settings__checkbox_active" : "")} onClick={() => this.onClickSetting("sqr")}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="settings__text">Использовать обыкновенные дроби</a>
                            </td>
                            <td>
                                <div className={"settings__checkbox-container" + (this.props.settingFraction ? " settings__checkbox-container_active" : "")}>
                                    <label className={"settings__checkbox" + (this.props.settingFraction ? " settings__checkbox_active" : "")} onClick={() => this.onClickSetting("fraction")}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="settings__text">Сокращять дроби</a>
                            </td>
                            <td>
                                <div className={"settings__checkbox-container" + (this.props.settingShortFraction  ? " settings__checkbox-container_active" : "")}>
                                    <label className={"settings__checkbox" + (this.props.settingShortFraction ? " settings__checkbox_active" : "")} onClick={() => this.onClickSetting("shortFraction")}/>
                                </div>
                            </td>
                        </tr>
                    </div>
                </div>
            </div>
        );
    }

    onClickSetting (setting) {
        const action = SetSettings;
        action.setting = setting;
        this.props.dispatcher(action);
    }
}

function updateProps(state) {
    return {
        settingSqr: state.settings.sqr,
        settingFraction: state.settings.fraction,
        settingShortFraction: state.settings.shortFraction,
        open: state.settingsOpen
    };
}

export default connect(updateProps)(Settings);