import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";
import {bookReducer} from "./reducers/bookReducer/bookReducer";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    books: bookReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

