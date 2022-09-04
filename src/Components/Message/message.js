import React, { useState } from "react";
import { MessageShow } from "../MessageToShow/messageToShow";

export function Message({ message }) {

    const [replies, setReplies] = useState(Object.entries(message?.replies || []));

    return (

        <MessageShow messageToShow={message} messageToReply={message.id} >
            {replies.map(reply => {
                return (
                    <MessageShow className="reply" messageToShow={reply[1]} messageToReply={message.id} key={reply[0]}>
                    </MessageShow>
                )
            })}

        </MessageShow>

    )
}