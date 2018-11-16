import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    form: formReducer
}

const reducer = combineReducers(reducers);

const store = createStore(reducer);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render( app, document.getElementById('root'));
serviceWorker.unregister();
