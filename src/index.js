import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import main from './reducers/main';
import './index.css';

const store = createStore(main);

ReactDOM.render((
        <Provider store={store}>
            <App/>
        </Provider>
    ), document.getElementById('root'));

registerServiceWorker();
