import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {error, getBookSelector, loader} from "../redux/reducers/bookReducer/bookSelector";
import {loadBooks, loadBooks2, loadBooks3} from "../redux/reducers/bookReducer/bookReducer";
import bookLoad from "../redux/reducers/bookReducer/bookLoad";
import {Box, Container, CssBaseline, TextField} from "@mui/material";
import '../styles/bookPage.css'
import Button from "@mui/material/Button";


const BookPage = () => {
    const books = useSelector(getBookSelector);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const err = useSelector(error);
    const main = document.getElementById('main')

    // useEffect(() => {
    //     dispatch(loadBooks3())}, []
    // )
    const scroll = () => {
        main.scrollLeft += 600;
    }

    const scrollBack = () => {
        main.scrollLeft += -600;
    }

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
        <>

            <Button onClick={scrollBack}><img src='Vector.svg' alt=''/></Button>
            <Container>
                <Box id='main' whiteSpace='pre-line' sx={{columnCount: 2,
                    columnGap: '64px',
                    overflow: 'hidden',
                    height: '772px',
                    columnWidth: '544px'}}>
                    <CssBaseline/>
                    <h4>Льюис Кэролл</h4>
                    <h4>Алиса в стране чудес</h4>
            {bookLoad()}
                </Box>
            </Container>
            <Button onClick={scroll}><img src='Vector2.svg' alt=''/></Button>

        </>
    );
};

export default BookPage;