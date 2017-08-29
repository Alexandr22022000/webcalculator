import {CHANGE_LIST, CHANGE_INPUT_TEXT, CHANGE_SETTINGS, OPEN_CLOSE_SETTINGS, START_CALC_EQUATION, START_CALC} from '../constants/actionsTypes';

const changeList = (newList) => ({
    type: CHANGE_LIST,
    newList
});

const changeInputText = (text) => ({
    type: CHANGE_INPUT_TEXT,
    text
});

const changeSettings = (typeSetting) => ({
    type: CHANGE_SETTINGS,
    typeSetting
});

const openCloseSettings = () => ({
    type: OPEN_CLOSE_SETTINGS
});

const startCalcEquation = (text) => ({
    type: START_CALC_EQUATION,
    text
});

const startCalc = (text) => ({
    type: START_CALC,
    text
});

export {changeList, changeInputText, changeSettings, openCloseSettings, startCalcEquation, startCalc};