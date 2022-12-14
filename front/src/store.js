import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import {ventasReducer} from './reducer/ventasReducer'

import { authReducer } from './reducer/userReducer';
const reducer=combineReducers({
    ventas: ventasReducer,
    auth: authReducer
});

let initialState={};

const middleware = [thunk];

const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))














export default store;
