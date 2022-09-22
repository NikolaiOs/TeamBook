import {ERROR_BOOKS, GET_BOOKS, LOADING_BOOKS} from "../../actionTypes";
import {getError, getLoading, getBooks} from "../../action";

const initialState = {
    bookList: [],
    loader: false,
    error: null
};

const arr_book = [1,2,3,4,5,6,7];

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
        default:
            return state
    }
}

export const loadBooks = () => {
    return async dispatch => {
        dispatch(getLoading())
        try {
            {arr_book}
            const response = await fetch(`/Book${2}.txt`);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            console.log(response)
            const result = await response.text();
            dispatch(getBooks(result))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}




