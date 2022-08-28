import { onValue } from "firebase/database";
import { getUserRef, userRef } from "../../Services/firebase";

export const CHANGE_NAME = "USER::CHANGE_NAME";
export const SIGN_IN = "USER::SIGN_IN";
export const SIGN_OUT = "USER::SIGN_OUT";
export const SHOW_USERS = "USER::SHOW_USERS";


export const showMessages = (users) => ({
    type: SHOW_USERS,
    payload: users
})


export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName
});

// signIn и signOut используются в компоненте Routes
export const signIn = () => ({
    type: SIGN_IN,
});

export const signOut = () => ({
    type: SIGN_OUT,
});


export const usersList = () => async (dispatch) => {
    const unsubscribe = onValue(userRef, (snapshot) => {
        // setUserName(chatsSnap.val()?.name);
        dispatch(showMessages(Object.values(snapshot.val() || [])));
    })
};