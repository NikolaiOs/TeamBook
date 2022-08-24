import thunk from 'Redux-thunk';
import {createStore, combineReducers, applyMiddleware} from "Redux";
import {createLogger} from "Redux-logger/src";
import {bookReducer} from "./reducers/bookReducer/bookReducer";

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    books: bookReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

