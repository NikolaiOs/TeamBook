import React, { useState } from "react";
import { selectUsersList } from "../../../Redux/user/selectors";
import { Form } from "../../Form/form";
import { useDispatch, useSelector } from "react-redux";
import './message.css'

export function MessageShow({ messageToShow, replyFormIsShown, setReplyFormIsShown, username, replyBtnHandler, readMore, children, className }) {

    const [dotsAreShown, setDotsAreShown] = useState(true);
    const [sliceChart, setsliceChart] = useState(300);
    const users = useSelector(selectUsersList);
    const userName = users.find(user => user.id === messageToShow.author)

    return (
        <div className={`message__item ${className}`} >
            {/* !Поменять на img */}
            < a href="#" className="message__profile_pic" > <div href="#" alt="profile"></div> </a >
            <a href="#" className="message__author">{userName?.name} </a>
            <p className="message__text">{messageToShow.text.slice(0, sliceChart)}{dotsAreShown === true && messageToShow.text.length > sliceChart ? <span>...</span> : <span>{messageToShow.text.slice(sliceChart)}</span>} </p>
            {messageToShow.text.length > sliceChart && <div className="message__details" onClick={readMore}>{dotsAreShown === true ? "Показать полностью" : "Скрыть"}</div>}

            <div className="message__bottom flex">
                <div className="message__date">{messageToShow.date}</div>
                <div className="message__reply pointer" onClick={() => replyBtnHandler(messageToShow.id)} >Ответить</div>
                <div className="message__complain pointer">Пожаловаться</div>
            </div>

            {children}
            {replyFormIsShown && <Form setReplyFormIsShown={setReplyFormIsShown}></Form>}

            {/* <Button value={"Удалить"} type="button" onClick={() => handleDeleteMessage(message.id)}></Button>
            <Button value={"Изменить"}  type="button" onClick={() => handleChangeMessage(message.id)}></Button> */}
        </div >
    )
}