import React, { useState } from "react";
import { MessageShow } from "../MessageToShow/messageToShow";

export function Message({ message, handleChangeMessage, handleDeleteMessage }) {

    const [replies, setReplies] = useState(Object.entries(message?.replies || []));

    return (
        // <div className="message__item">
        //     {/* !Поменять на img */}
        //     {console.log(userName?.name)}
        //     <a href="#" className="message__profile_pic"><div href="#" alt="profile"></div> </a>
        //     <a href="#" className="message__author">{userName?.name} </a>
        //     <p className="message__text">{message.text.slice(0, sliceChart)}{dotsAreShown === true && message.text.length > sliceChart ? <span>...</span> : <span>{message.text.slice(sliceChart)}</span>} </p>
        //     {message.text.length > sliceChart && <div className="message__details" onClick={readMore}>{dotsAreShown === true ? "Показать полностью" : "Скрыть"}</div>}

        //     <div className="message__bottom flex">
        //         <div className="message__date">{message.date}</div>
        //         <div className="message__reply pointer" onClick={() => replyBtnHandler(message.id)} >Ответить</div>
        //         <div className="message__complain pointer">Пожаловаться</div>
        //     </div>

        //     {/*!!!!!!!!!!!!! Верстка одинаковая, придумать презентационный компонент? */}
        //     {/*!!!!!!!!!!!!! После добавления ответа, компонент не обновляется (только после добавления сообщения) */}
        //     {replies.map(reply => {
        //         return (
        //             <div className="message__item reply" key={reply[0]}>
        //                 <a href="#" className="message__profile_pic"><div href="#" alt="profile"></div> </a>
        //                 <a href="#" className="message__author">{reply[1].author} </a>
        //                 <p className="message__text">{reply[1].text.slice(0, sliceChart)}{dotsAreShown === true && reply[1].text.length > sliceChart ? <span>...</span> : <span>{reply[1].text.slice(sliceChart)}</span>} </p>
        //                 {reply[1].text.length > sliceChart && <div className="message__details" onClick={readMore}>{dotsAreShown === true ? "Показать полностью" : "Скрыть"}</div>}

        //                 <div className="message__bottom flex">
        //                     <div className="message__date">{reply[1].date}</div>
        //                     <div className="message__reply pointer" onClick={() => replyBtnHandler(message.id)} >Ответить</div>
        //                     <div className="message__complain pointer">Пожаловаться</div>
        //                 </div>
        //             </div>
        //         )


        //     }
        //     )}
        //     {/* {console.log("replies: ", replies)}
        //     {replies.map(reply => console.log("reply: ", reply))} */}

        //     {replyFormIsShown && <Form setReplyFormIsShown={setReplyFormIsShown}></Form>}

        //     {/* <Button value={"Удалить"} type="button" onClick={() => handleDeleteMessage(message.id)}></Button>
        //     <Button value={"Изменить"}  type="button" onClick={() => handleChangeMessage(message.id)}></Button> */}
        // </div>

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