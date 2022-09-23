import { ERROR_BOOKS, GET_BOOKS, LOADING_BOOKS, PAGE_ID_BOOKS } from "../../actionTypes";
import { getError, getLoading, getBooks } from "../../action";

const initialState = {
    bookList: [],
    loader: false,
    error: null,
    bookPageId: 10
};


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

export const loadBooks = () => {
    return async dispatch => {
        dispatch(getLoading())
        try {
            const response = await fetch(`/Book${2}.txt`);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            const result = await response.text();
            dispatch(getBooks(result))
        } catch (e) {
            dispatch(getError(e))
        }
    }
}
