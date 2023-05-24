
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {SearchAPI} from "../pages/Home/thunk"
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middleware = [thunk, logger];
const routeReducer = combineReducers({
    SearchAPI
})

export const store = createStore(routeReducer, applyMiddleware(...middleware),)