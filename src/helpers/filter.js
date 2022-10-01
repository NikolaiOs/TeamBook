import {useDispatch, useSelector} from "react-redux";
import {error, getBookSelector, loader} from "../Redux/reducers/bookReducer/bookSelector";
import {loadBooks} from "../Redux/reducers/bookReducer/bookReducer";
import {useEffect, useState} from "react";
import React from 'react';


export const MakeBooks = () => {
    const dispatch = useDispatch();
    const books = useSelector(getBookSelector);
    const err = useSelector(error);
    const loading = useSelector(loader);

    useEffect(() => {
        dispatch(loadBooks());
    }, [])


    if (loading) {
        return (
            <div><h2>Загрузка</h2></div>
        )
    }

    if (err) {
        return (
            <div>
                <h2>Ошибка</h2>
                <button onClick={() => dispatch(loadBooks())}>Перезагрузить страницу</button>
            </div>
        )
    }
    return books;
}



export const filter = (array, finder) => {
    return array.filter(item => item.name.includes(finder) || item.author.includes(finder))
}