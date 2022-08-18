import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {error, getBookSelector, loader} from "../redux/reducers/bookReducer/bookSelector";
import {loadBooks, loadBooks2, loadBooks3} from "../redux/reducers/bookReducer/bookReducer";
import bookLoad from "../redux/reducers/bookReducer/bookLoad";
import {Box, Container, CssBaseline, TextField} from "@mui/material";
import '../styles/bookPage.css'

const BookPage = () => {
    const books = useSelector(getBookSelector);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const err = useSelector(error);

    // useEffect(() => {
    //     dispatch(loadBooks3())}, []
    // )

    if(loading) {
        return (
            <div><h2>Загрузка</h2></div>
        )
    }

    if(err) {
        return (
            <div>
                <h2>Ошибка</h2>
            </div>
        )
    }

    return (
        <div>
            <CssBaseline/>
            <Container maxWidth='sm'>

                <Box component='main' whiteSpace='pre-line'>
                    <h2>Book Page</h2>
            {bookLoad()}
                </Box>
                </Container>
        </div>
    );
};

export default BookPage;