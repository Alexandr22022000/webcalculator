import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calcEquation from './scripts/calcEquation';
import calc from './scripts/calc';

function StoreUpdate(store = {
    list: "equation",
    settings: {sqr: true, fraction: true, shortFraction: true},
    settingsOpen: false,
    inputText: "",
    output: {line1: "", line2: "", line3: "", line4: "", line4Top: "", line4Bottom: "", line5: "", line6: "", line6Top: "", line6Bottom: "", lineAnswer: ""}
}, action) {
    switch (action.type) {
        case "PressToolbarButton":
            let output;
            switch (action.button ) {
                case "equation":
                    output = {line1: "", line2: "", line3: "", line4: "", line4Top: "", line4Bottom: "", line5: "", line6: "", line6Top: "", line6Bottom: "", lineAnswer: ""};
                    break;

                case "calculator":
                    output = {line1: ""};
                    break;

                default:
                    output = {};
                    break;
            }
            return Object.assign({}, store, {list: action.button}, {output}, {inputText: ""});

        case "SetSettings":
            const { settings } = store;
            settings[action.setting] = !settings[action.setting];
            return Object.assign({}, store, {settings});

        case "SettingsOpenClose":
            return Object.assign({}, store, {settingsOpen: !store.settingsOpen});

        case "SetInputDate":
            return Object.assign({}, store, {inputText: action.date});

        case "CalcEquation":
            return Object.assign({}, store, {output: calcEquation(store.inputText, store.settings.sqr, store.settings.fraction, store.settings.shortFraction)});

        case "Calc":
            return Object.assign({}, store, {output: calc(store.inputText)});

        default:
            return store;
    }
}

const store = createStore(StoreUpdate);

ReactDOM.render(
        <Provider store={store}>
            <App dispatcher={store.dispatch}/>
        </Provider>
    , document.getElementById('root'));
registerServiceWorker();
