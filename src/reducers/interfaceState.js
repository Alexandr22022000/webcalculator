import {CHANGE_LIST, OPEN_CLOSE_SETTINGS, START_APP} from '../constants/actionsTypes';
import {EDUCATION_LIST} from '../constants/listTypes';

const defaultState = {
    list: EDUCATION_LIST,
    settingsIsOpen: false
};

const interfaceState = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_LIST:
            return {...state, list: action.newList};

        case OPEN_CLOSE_SETTINGS:
            return {...state, settingsIsOpen: !state.settingsIsOpen};

        default:
            return state;
    }
};

export default interfaceState;