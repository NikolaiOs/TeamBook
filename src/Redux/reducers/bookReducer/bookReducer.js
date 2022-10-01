import { ERROR_BOOKS, GET_BOOKS, LOADING_BOOKS, PAGE_ID_BOOKS } from "../../actionTypes";
import {getError, getLoading, getBooks, getBookPageId} from "../../action";
import {useSelector} from "react-redux";
import {selectPageId} from "./bookSelector";
import {useParams} from "react-router-dom";

const initialState = {
    bookList: [],
    loader: false,
    error: null,
    bookPageId: null
};


export const loadBooks = () => {


    return async dispatch => {
        dispatch(getLoading())
        try {
            const arr = [];
            for(let i = 0; i < 7; i++){
                const response = await fetch(`/Book${i}.txt`);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const result = await response.text();
                let resultWithAttr = {
                    id: i,
                    name: result.substring(0, result.indexOf('\n')),
                    author: result.substring(result.indexOf('\n'), result.indexOf('.')),
                    description: result.substring(result.indexOf('~'), result.indexOf('*', [result.indexOf('~')])),
                    text: result.substring(result.indexOf('"')),
                    cover: 'Images/cover.jpeg'
                }
                arr.push(resultWithAttr)
            }
            dispatch(getBooks(arr))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                bookList: action.payload,
                loader: false
            }
        case LOADING_BOOKS:
            return {
                ...state,
                loader: true
            }
        case ERROR_BOOKS:
            return {
                ...state,
                loader: false,
                error: action.payload
            }
        case PAGE_ID_BOOKS:
            return {
                ...state,
                bookPageId: action.payload
            }
        default:
            return state
    }
}

