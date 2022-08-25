import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fromReply } from "../../Redux/messages/actions";
import { Form } from "../Form/form";
import './message.css'

export function Message({ message, handleChangeMessage, handleDeleteMessage, userName }) {

    const dispatch = useDispatch();

    const [dotsAreShown, setDotsAreShown] = useState(true);
    const [sliceChart, setsliceChart] = useState(300);
    const [replyFormIsShown, setReplyFormIsShown] = useState(false);


    function readMore() {
        setDotsAreShown(!dotsAreShown);
    }

    function replyBtnHandler(id) {
        setReplyFormIsShown(true);
        dispatch(fromReply(true, id));
    }

    // const [rep, setRep] = useState(Object.entries(message.replies));
    // const [rep, setRep] = useState(Object.entries(message.replies));
    // const [rep, setRep] = useState([Object.values(message.replies)]);

    // rep.forEach(([key, value]) => {
    //     // console.table(key, value);
    // });

    const newMessage = {
        id: message.id,
        author: message.author,
        text: message.text,
        replies: Array(message.replies),
        date: message.date
    }

    return (
        <div className="message__item">
            {/* !Поменять на img */}
            <a href="#" className="message__profile_pic"><div href="#" alt="profile"></div> </a>
            <a href="#" className="message__author">{message.author} </a>
            <p className="message__text">{message.text.slice(0, sliceChart)}{dotsAreShown === true && message.text.length > sliceChart ? <span>...</span> : <span>{message.text.slice(sliceChart)}</span>} </p>
            {message.text.length > sliceChart && <div className="message__details" onClick={readMore}>{dotsAreShown === true ? "Показать полностью" : "Скрыть"}</div>}

            <div className="message__bottom flex">
                <div className="message__date">{message.date}</div>
                <div className="message__reply pointer" onClick={() => replyBtnHandler(message.id)} >Ответить</div>
                <div className="message__complain pointer">Пожаловаться</div>
            </div>
            {/* {console.log('rep: ', rep)}
            {console.log(typeof rep)} */}

            {console.log('newMessage: ', newMessage)}

            {/* <div>{rep.map(reply => {
                return (
                    <div>{reply}</div>
                )
            })} </div> */}

            {/* <div>{message.replies.map(reply => {
                return (
                    <div>{reply}</div>
                )
            })} </div> */}
            {replyFormIsShown && <Form setReplyFormIsShown={setReplyFormIsShown}></Form>}

            {/* <Button value={"Удалить"} type="button" onClick={() => handleDeleteMessage(message.id)}></Button>
            <Button value={"Изменить"} type="button" onClick={() => handleChangeMessage(message.id)}></Button> */}
        </div>
    )
}