import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger/src";
import { bookReducer } from "./reducers/bookReducer/bookReducer";
import { messagesReducer } from './messages/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    books: bookReducer,
    messages: messagesReducer
})


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

