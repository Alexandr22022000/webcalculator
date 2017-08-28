import {CHANGE_LIST, CHANGE_INPUT_TEXT, CHANGE_SETTINGS, OPEN_CLOSE_SETTINGS, START_CALC_EQUATION, START_CALC, START_APP} from '../constants/actionsTypes';

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

const startApp = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(navigator.userAgent);

    return {
        type: START_APP,
        isMobile
    };
};

export {changeList, changeInputText, changeSettings, openCloseSettings, startCalcEquation, startCalc, startApp};