import { auth } from "../../Services/firebase";
import { CHANGE_NAME, SHOW_USERS, SIGN_IN, SIGN_OUT } from "./actions";


const initialState = {
    users: [],
    name: "",
    authed: false,
    currentUser: {}
}

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_USERS:
            const currentUser = payload.find(user => user.id === auth.currentUser.uid);
            return {
                ...state,
                users: payload,
                currentUser: currentUser,
            };
        case CHANGE_NAME:
            return {
                ...state,
                name: payload,
            };
        case SIGN_IN:
            return {
                ...state,
                authed: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                authed: false,
            };
        default:
            return state;
    }
}
