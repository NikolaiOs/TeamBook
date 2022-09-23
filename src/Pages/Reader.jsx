import React, {useEffect, useRef, useState} from "react";
import "../Styles/reader.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {
    Container,
    CssBaseline,
    Input,
    Skeleton,
    Select,
    Option,
    FormControl,
    InputLabel,
    NativeSelect
} from "@mui/material";
import {error, getBookSelector, loader} from "../Redux/reducers/bookReducer/bookSelector";
import {loadBooks} from "../Redux/reducers/bookReducer/bookReducer";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import {styled} from "@mui/material/styles";
import {getBooks} from "../Redux/action";


const Reader = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const err = useSelector(error);
    const books  = useSelector(getBookSelector);
    const ref = useRef();
    const [scrollWidth, setScrollWidth] = useState(1);
    const [clientWidth, setClientWidth] = useState(1);
    const [value, setValue] = useState(1);
    const arr_book = [1,2,3,4,5,6,7];


    useEffect( () => {
            setLoading(true)
            dispatch(loadBooks());
            setLoading(false)
            setTimeout(() => setScrollWidth(ref.current.scrollWidth), 100)
            setTimeout(() => setClientWidth(ref.current.clientWidth), 100)
        }, []
    );

    const selectBook = (e) => {

    }

    const scroll = () => {
        const main = document.getElementById('main');
        main.scrollLeft += 1200 + 16;
        if(value < (Math.ceil(scrollWidth / clientWidth)))
        {
            setValue(prev => prev + 1);
        }
    }

    const scrollBack = () => {
        const main = document.getElementById('main');
        main.scrollLeft -= 1200 + 16;
        if(value < (Math.ceil(scrollWidth / clientWidth)) && value !== 1)
        {
            setValue(prev => prev - 1);
        }
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
                <button onClick={() => dispatch(loadBooks())}>Перезагрузить страницу</button>
            </div>
        )
    }
    return (
        <>
            <section className="reader">
                <div className="reader__container">
                    <div className="reader__header">
                        <nav className="reader__header-nav">
                            <div className="reader__header-nav-left">
                                <NavLink className="header-nav-left__link" to="/">
                                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="24" fill="#fff"/>
                                        <g clipPath="url(#a)"><path d="m27.793 12.293-11 11a1 1 0 0 0 0 1.414l11 11a1 1 0 0 0 1.414-1.414L18.914 24l10.293-10.293a1 1 0 0 0-1.414-1.414Z" fill="#000"/>
                                        </g><defs><clipPath id="a"><path fill="#fff" transform="rotate(-90 23.5 12.5)" d="M0 0h24v24H0z"/></clipPath></defs>
                                    </svg>
                                </NavLink>
                            </div>
                            <div className="reader__header-nav-right">
                                <div className="header-nav-right__item">
                                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#fff"/>
                                        <path d="M18.155 29a1.405 1.405 0 1 1 0 2.81 1.405 1.405 0 0 1 0-2.81Zm3.938.563h11.813a.844.844 0 0 1 .114 1.68l-.114.007H22.093a.844.844 0 0 1-.114-1.68l.114-.008Zm-8.438-6.188a1.405 1.405 0 1 1 0 2.81 1.405 1.405 0 0 1 0-2.81Zm3.938.563h16.313a.844.844 0 0 1 .114 1.68l-.114.007H17.593a.844.844 0 0 1-.114-1.68l.114-.008Zm-3.938-6.188a1.405 1.405 0 1 1 0 2.81 1.405 1.405 0 0 1 0-2.81Zm3.938.563h16.313a.844.844 0 0 1 .114 1.68l-.114.007H17.593a.844.844 0 0 1-.114-1.68l.114-.008Z" fill="#212121"/>
                                    </svg>
                                </div>
                                <div className="header-nav-right__item">
                                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#fff"/>
                                        <path d="M29.351 15.539H18.65a.803.803 0 0 0-.803.804v16.083a.804.804 0 0 0 1.304.628L24 29.167l4.85 3.887a.801.801 0 0 0 1.304-.628V16.343a.803.803 0 0 0-.803-.804Zm-.802 15.214L24.5 27.51a.8.8 0 0 0-1.002 0l-4.047 3.244V17.147h9.096v13.606Z" fill="#000"/>
                                    </svg>
                                </div>
                                <div className="header-nav-right__item">
                                    <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="24" cy="24" r="24" fill="#fff"/>
                                        <g clipPath="url(#a)">
                                            <path d="M31.688 21.526a3.793 3.793 0 0 0-2.663 1.06.718.718 0 1 0 1.012 1.021 2.347 2.347 0 0 1 1.65-.643c1.19 0 2.157.806 2.157 1.797v.648a3.842 3.842 0 0 0-2.157-.648c-1.981 0-3.593 1.45-3.593 3.234 0 1.783 1.612 3.234 3.593 3.234a3.833 3.833 0 0 0 2.217-.691.718.718 0 0 0 1.377-.288v-5.49c0-1.783-1.612-3.234-3.593-3.234Zm0 8.266c-1.19 0-2.157-.806-2.157-1.797 0-.99.968-1.797 2.157-1.797 1.188 0 2.156.806 2.156 1.797 0 .99-.968 1.797-2.157 1.797Zm-6.302-3.477v-.002l-2.282-4.31-2.281-4.308a.718.718 0 0 0-1.27 0l-4.563 8.618-.001.002-1.905 3.599a.719.719 0 1 0 1.27.672l1.7-3.211h8.267l1.7 3.211a.719.719 0 0 0 1.27-.672l-1.905-3.599Zm-8.57-.378 3.372-6.37 3.372 6.37h-6.745Z" fill="#000"/>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path fill="#fff" transform="translate(13 13)" d="M0 0h23v23H0z"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </section>
            <div style={{display: "flex"}}>
                <Button onClick={scrollBack}><img src='Vector.svg' alt=''/></Button>
                <Container sx={{ maxWidth: '1280px',
                    padding: '40px 78px' }}>
                    <div className='chapter' style={{ display: 'flex',
                        justifyContent: 'space-around' }}>
                        <h4>Федор Достоевский</h4>
                        <h4>Преступление и наказание</h4>
                    </div>
                    <Box id='main' sx={{columnCount: 2,
                        columnGap: '64px',
                        overflowY: 'auto',
                        height: '772px',
                        columnWidth: '544px',
                        textAlign: 'justify'}}
                         ref={ref}>
                        <CssBaseline/>
                        {books}
                    </Box>
                    <div>
                        <h5 style={{textAlign: "center"}}>Страница {value} из {Math.ceil(scrollWidth / clientWidth)}</h5>
                    </div>
                </Container>
                <Button onClick={scroll}><img src='Vector2.svg' alt=''/></Button>
            </div>

            <Box component='footer' sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                <Button style={{borderRadius: 30, backgroundColor: '#A7A7A7', color: 'black'}}>написать комментарий</Button>
            </Box>
        </>
    )}

export {Reader}