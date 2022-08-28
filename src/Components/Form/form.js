import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './form.css';
import { Input } from '../Input/input';
import { Button } from '../Button/button';
import { selectIsReply, selectReplyTo } from '../../Redux/messages/selectors';
import { fromReply, handleSendMessage } from '../../Redux/messages/actions';
import { selectPageId } from '../../Redux/reducers/bookReducer/bookSelector';


export const Form = ({ setReplyFormIsShown, formIsShown, setFormIsShown }) => {

    const dispatch = useDispatch();
    const inputRef = useRef();


    let [value, setValue] = useState('');
    const isReply = useSelector(selectIsReply);
    const replyToMsg = useSelector(selectReplyTo);

    const pageId = useSelector(selectPageId);

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    // фокусировка на поле ввода
    useEffect(() => { inputRef.current?.focus() }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            if (isReply === true) {
                dispatch(handleSendMessage(value, pageId, replyToMsg));
                dispatch(fromReply(false, null));
                setReplyFormIsShown(false);
            } else {
                dispatch(handleSendMessage(value, pageId));
                setFormIsShown(!formIsShown)
            }
        }
        inputRef.current?.focus();
        setValue('');
    }


    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <Input className='input__form' type="text" value={value}
                    inputRef={inputRef}
                    placeholder='Текст сообщения' onChange={handleChange} />
                <Button value={'Отправить'} type='submit' className="button__mt3vm button__right" />
            </form>
        </>
    )
}