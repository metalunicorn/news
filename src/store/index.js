import { createStore, applyMiddleware, combineReducers } from 'redux';
import { promiseReducer } from "./reducers/index";
import thunk from 'redux-thunk';


export let store = createStore(combineReducers({
    promise: promiseReducer,
}), applyMiddleware(thunk))

