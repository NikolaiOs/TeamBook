import { onValue, set } from "firebase/database";
import { auth, getMessageRefById, getMsgsRefByChatId, getRepliesRefByChatId, getReplyRefByMsgId } from "../../Services/firebase";

export const SHOW_MESSAGES = "MESSAGES::SHOW_LIST";
export const REPLY = "MESSAGES::REPLY";
export const SHOW_REPLIES = "MESSAGES::SHOW_REPLIES";

export const showMessages = (commentsList) => ({
    type: SHOW_MESSAGES,
    payload: {
        commentsList: commentsList
    }
})


export const fromReply = (boolean, msgId) => ({
    type: REPLY,
    payload: {
        isReply: boolean,
        replyTo: msgId
    }
})

export const messagesList = (bookPageId) => async (dispatch) => {
    const unsubscribe = onValue(getMsgsRefByChatId(bookPageId), (snapshot) => {
        dispatch(showMessages(Object.values(snapshot.val() || [])));
    });
};

export const handleSendMessage = (value, bookPageId, msgId) => async (dispatch) => {
    console.log("value: ", value)
    const date = new Date();
    const now = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
    const newMsg = {
        author: auth.currentUser.uid,
        text: value,
        id: Date.now() + Math.ceil(Math.random() * 100),
        date: now,
        replies: []
    };
    console.log("bookPageId: ", bookPageId);
    // добавление сообщения в firebase
    if (msgId != null) {
        set(getReplyRefByMsgId(bookPageId, msgId, newMsg.id), newMsg);

    } else set(getMessageRefById(bookPageId, newMsg.id), newMsg);
}

