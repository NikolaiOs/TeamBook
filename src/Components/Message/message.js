import React, { useState } from "react";
import { MessageShow } from "../MessageToShow/messageToShow";

export function Message({ message }) {

    const [replies, setReplies] = useState(Object.entries(message?.replies || []));

    return (

        <MessageShow messageToShow={message} >
            {replies.map(reply => {
                return (
                    <MessageShow className="reply" messageToShow={reply[1]} key={reply[0]}>
                    </MessageShow>
                )
            })}

        </MessageShow>

    )
}