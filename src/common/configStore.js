import {applyMiddleware, createStore} from 'redux';
import Thunk from 'redux-thunk';
import rootReducers from './rootReduces';

const middlewares = [
    Thunk,
]

if (process.env.NODE_ENV === 'development') {
    let logger = require('redux-logger').createLogger({collapsed: true});
    middlewares.push(logger);
}

const configStore = (initilizeState) => {
    const store = createStore(rootReducers, initilizeState, applyMiddleware(...middlewares));
    return store;
}

export default configStore;