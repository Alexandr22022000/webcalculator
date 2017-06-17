import {combineReducers} from 'redux';
import interfaceState from './interfaceState';
import calcState from './calcState';

const main = combineReducers({
    interfaceState,
    calcState});

export default main;