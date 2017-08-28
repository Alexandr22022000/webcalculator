import {START_CALC, START_CALC_EQUATION, CHANGE_INPUT_TEXT, CHANGE_SETTINGS} from '../constants/actionsTypes';
import {SQR, FRACTION, SHORT_FRACTION} from '../constants/settingTypes';
import calcEquation from '../scripts/calcEquation';
import calc from '../scripts/calc';

const defaultState = {
    inputText: "",
    settings: {[SQR]: false, [FRACTION]: true, [SHORT_FRACTION]: true},
    answerEquation: {
        line1: '',
        line2: '',
        line3: '',
        line4: '',
        line4Top: '',
        line4Bottom: '',
        line5: '',
        line6: '',
        line6Top: '',
        line6Bottom: '',
        lineAnswer: '',
    },
    answerCalc: ''
};

const calcState = (state = defaultState, action) => {
    switch (action.type) {
        case START_CALC_EQUATION:
            return {...state, answerEquation: calcEquation(action.text, state.settings)};

        case START_CALC:
            return {...state, answerCalc: calc(action.text)};

        case CHANGE_INPUT_TEXT:
            return {...state, inputText: action.text};

        case CHANGE_SETTINGS:
            const newSettings = {...state.settings};
            newSettings[action.typeSetting] = !newSettings[action.typeSetting];
            return {...state, settings: newSettings};

        default:
            return state;
    }
};

export default calcState;