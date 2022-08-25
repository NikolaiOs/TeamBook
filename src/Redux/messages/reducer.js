import { REPLY, SHOW_MESSAGES } from "./actions";


const initialState = {
    messageList: [],
    isReply: null,
    replyTo: null
};

export const messagesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MESSAGES:
            return {
                ...state,
                messageList: payload.commentsList,
            };
        case REPLY:
            return {
                ...state,
                isReply: payload.isReply,
                replyTo: payload.replyTo
            };
        default:
            return state;
    };
}