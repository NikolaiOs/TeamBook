import { useEffect, useState } from 'react';
import { Message } from '../Message/message';
import { useDispatch, useSelector } from "react-redux";
// import { isChangingMessage } from "../../store/messages/actions"
import './messages.css'
import { selectMesagesList } from '../../Redux/messages/selectors';
import { messagesList } from '../../Redux/messages/actions';


export function Messages({ pageId }) {

    const dispatch = useDispatch();
    const messages = useSelector(selectMesagesList);

    // слушатель любого изменения в списке сообщений конкретного чата
    useEffect(() => {
        // const unsubscribe = onValue(getMsgsRefByChatId(chatId), (snapshot) => {
        //     setMessages(Object.values(snapshot.val() || []));
        // });
        dispatch(messagesList(pageId));
        // return () => unsubscribe;
    }, [pageId]);

    // const handleDeleteMessage = (id) => {
    //     remove(getMessageRefById(chatId, id));
    // }

    // const handleChangeMessage = (id) => {
    //     const changingMsgId = messages.findIndex(item => item.id === id)
    //     dispatch(isChangingMessage(true, id, messages[changingMsgId].text));
    // }


    const [userName, setUserName] = useState('unchanged');
    // //получает имя пользователя
    // useEffect(() => {
    //     const unsubscribe = onValue(userRef, (chatsSnap) => {
    //         setUserName(chatsSnap.val()?.name);
    //     })
    //     return unsubscribe;
    // }, []);


    return <div className="messages">
        {messages.map(message =>
            <Message message={message} key={message.id}
                // handleChangeMessage={handleChangeMessage} handleDeleteMessage={handleDeleteMessage} 
                userName={userName} />
        )
        }
    </div>
}