import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger/src";
import { bookReducer } from "./reducers/bookReducer/bookReducer";
import { messagesReducer } from '../../../teambook — копия/src/store/messages/reducer';

const logger = createLogger({
    collapsed: true,
    diff: true
})

const rootReducer = combineReducers({
    books: bookReducer,
    messages: messagesReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

