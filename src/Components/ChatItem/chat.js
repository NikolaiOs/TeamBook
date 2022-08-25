import { useRef, useEffect, useState } from 'react';
import { Navigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// import { deleted } from "../../store/chatList/actions"
import './chat.css'
import { Form } from '../Form/form';
import { Messages } from '../Messages/messages';
import { selectPageId } from '../../Redux/reducers/bookReducer/bookSelector';
import { Button } from '../Button/button';
// import { getDeleted } from "../../store/chatList/selectors";


export function ChatItem() {
    // const { chatId } = useParams();

    const pageId = useSelector(selectPageId);
    const [formIsShown, setFormIsShown] = useState(false);

    const parentRef = useRef();

    // const dispatch = useDispatch();

    // // список сообщения чата
    // const [chatMessages, setChatMessages] = useState([
    //     {
    //         id: 0,
    //         author: "from chats",
    //         text: "hi test",
    //         date: '21-05-2022'
    //     }
    // ]);



    return (
        <div ref={parentRef} className='chat__form'>
            <Button value={!formIsShown ? "Написать комментарий" : "Скрыть"} className="button__center" type="button" onClick={() => setFormIsShown(!formIsShown)}></Button>
            {formIsShown && <Form pageId={pageId} formIsShown={formIsShown} setFormIsShown={setFormIsShown} />}
            <Messages
                pageId={pageId}
            ></Messages>

        </div>

    )
}