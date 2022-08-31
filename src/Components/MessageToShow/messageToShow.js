import React, { useState } from "react";
import { selectUsersList } from "../../Redux/user/selectors";
import { Form } from "../Form/form";
import { useDispatch, useSelector } from "react-redux";
import './messageToShow.css'
import { fromReply } from "../../Redux/messages/actions";
import { selectMesagesList } from "../../Redux/messages/selectors";
import { SLICE_CHART } from "../../constants";

export function MessageShow({ messageToShow, children, className }) {
    const dispatch = useDispatch();

    const users = useSelector(selectUsersList);
    const userName = users.find(user => user.id === messageToShow.author)

    const messages = useSelector(selectMesagesList);

    const [dotsAreShown, setDotsAreShown] = useState(true);
    const [sliceChart, setsliceChart] = useState(SLICE_CHART);
    const [replyFormIsShown, setReplyFormIsShown] = useState(false);


    function readMore() {
        setDotsAreShown(!dotsAreShown);
    }

    function replyBtnHandler(id) {

        const putReplyToTopLevelMsg = messages.findIndex(message => Number(Object.keys(message.replies)) === id);
        setReplyFormIsShown(true);
        dispatch(fromReply(true, messages[putReplyToTopLevelMsg].id || id));
    }


    return (
        <div className={`message__item ${className}`} >
            {/* !Поменять на img */}
            < a href="#" className="message__profile_pic" > <div href="#" alt="profile"></div> </a >
            <a href="#" className="message__author">{userName?.name} </a>
            <p className="message__text">{messageToShow?.text.slice(0, sliceChart)}{dotsAreShown === true && messageToShow?.text.length > sliceChart ? <span>...</span> : <span>{messageToShow?.text.slice(sliceChart)}</span>} </p>
            {messageToShow?.text.length > sliceChart && <div className="message__details" onClick={readMore}>{dotsAreShown === true ? "Показать полностью" : "Скрыть"}</div>}

            <div className="message__bottom flex">
                <p className="message__date">{messageToShow.date}</p>
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