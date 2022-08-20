import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// one reducer holding one object
const feedbackReducer = (state = {feeling: 0, understanding: 0, support: 0, comments: ''}, action) => {
    // SWITCH STATEMENT FOR NEW_FEELING, NEW_UNDERSTANDING, NEW_SUPPORT, AND NEW_COMMENT
    // if(action.type === 'NEW_FEELING'){
    //     return {
    //     ...state,
    //     feeling: action.payload
    //     }
    // }

    switch(action.type) {
        case 'NEW_FEELING':
            return {...state, feeling: action.payload};
        case 'NEW_UNDERSTANDING':
            return {...state, understanding: action.payload};
        case 'NEW_SUPPORT':
            return {...state, support: action.payload};
        case 'NEW_COMMENT':
            return {...state, comments: action.payload};
        default:
            return state;
    }
    // here I made a switch statement, so if the action.type is matching to 'NEW_FEELING'
    // or
};

const reduxStore = createStore(
    combineReducers({
        // reducers go here
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
