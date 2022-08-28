import { useEffect, useRef, useState } from 'react';
import { Message } from '../Message/message';
import { useDispatch, useSelector } from "react-redux";
// import { isChangingMessage } from "../../store/messages/actions"
import './messages.css'
import { selectMesagesList, selectRepliesList, selectReplyTo } from '../../Redux/messages/selectors';
import { messagesList } from '../../Redux/messages/actions';
import { selectPageId } from '../../Redux/reducers/bookReducer/bookSelector';
import { Button } from '../Button/button';
import { Form } from '../Form/form';
import { onValue } from 'firebase/database';
import { userRef } from '../../Services/firebase';
import { selectUsersList } from '../../Redux/user/selectors';


export function Messages() {

    const dispatch = useDispatch();
    const messages = useSelector(selectMesagesList);
    const replyToMsg = useSelector(selectReplyTo);
    const pageId = useSelector(selectPageId);

    // const { chatId } = useParams();


    const [formIsShown, setFormIsShown] = useState(false);

    const parentRef = useRef();

    // !!!!!слушатель любого изменения в списке сообщений конкретного чата, но НЕ РАБОТАЕТ при добавлении ОТВЕТОВ на сообщения
    useEffect(() => {
        // const unsubscribe = onValue(getMsgsRefByChatId(chatId), (snapshot) => {
        //     setMessages(Object.values(snapshot.val() || []));
        // });
        dispatch(messagesList(pageId));
        // return () => unsubscribe;
    }, [pageId]);



    // const [userName, setUserName] = useState('');

    return (
        <div ref={parentRef} className='messages__wrap'>
            <Button value={!formIsShown ? "Написать комментарий" : "Скрыть"} className="button__center" type="button" onClick={() => setFormIsShown(!formIsShown)}></Button>
            {formIsShown && <Form formIsShown={formIsShown} setFormIsShown={setFormIsShown} />}

            <div className="messages">
                {messages.map(message =>
                    <Message message={message} key={message.id}
                    />
                )
                }
            </div>
        </div>
    )
}