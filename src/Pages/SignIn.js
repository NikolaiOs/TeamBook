import React, { useState } from "react";
import { PopUp } from "../Components/PopUp/popUp";
import { CircularProgress } from "@mui/material";
import { Input } from "../Components/Input/input";
import { Button } from "../Components/Button/button";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/signIn.css"
import { selectAuth, selectUserError, selectUserLoading } from "../Redux/user/selectors";
import { SIGN_IN, SIGN_IN_LINK, SIGN_UP, SIGN_UP_LINK } from "../constants";
import { logInByClick, registerByClick } from "../Redux/user/actions";

export const SignIn = () => {
    const dispatch = useDispatch();
    let location = useLocation();
    const isSignUp = useSelector(selectAuth);

    const [modalActive, setModalActive] = useState(true);

    const loading = useSelector(selectUserLoading);
    const error = useSelector(selectUserError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');


    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    const handleSignUp = async () => {
        dispatch(registerByClick({ email, password, user }));
    };


    const handleSignIn = async () => {
        dispatch(logInByClick({ email, password }));
    }




    // нажатие кнопки - подтверждение намерения залогиниться или зарегаться
    const handleSubmit = (e) => {
        e.preventDefault();

        if (location.pathname === SIGN_UP_LINK) {
            handleSignUp();
        } else {
            handleSignIn();
        }

        setEmail("");
        setPassword("");
        setUser("");
    };

    if (isSignUp) {
        return (<Navigate replace to="/" />)
    }




    return (
        <PopUp active={modalActive} setActive={setModalActive}>
            <>
                {loading ? <CircularProgress /> :
                    <>
                        <h2>{location.pathname === SIGN_UP_LINK ? SIGN_UP : SIGN_IN}</h2>
                        <form className="signForm" onSubmit={handleSubmit}>
                            <div className="signForm__content">
                                <label htmlFor="email" className="left-column">Email</label>
                                <Input id="email" type="email" value={email} className="right-column" onChange={handleChangeEmail} />

                                <label htmlFor="password" className="left-column">Password</label>
                                <Input id="password" type="password" value={password} className="right-column" currentPassword={password} onChange={handleChangePassword} />

                                {location.pathname === SIGN_UP_LINK && <>
                                    <label htmlFor="user" className="left-column">User</label>
                                    <Input id="user" type="text" value={user} className="right-column" onChange={handleChangeUser} />
                                </>}
                            </div>
                            <Button className='button__mt3vm button__grid-row-4' type="submit" value="Подтвердить" />
                        </form>
                        <Link to={location.pathname === SIGN_UP_LINK ? SIGN_IN_LINK : SIGN_UP_LINK} className="link">
                            {location.pathname === SIGN_UP_LINK ? SIGN_IN : SIGN_UP}
                        </Link>
                        {error && <h4>{error}</h4>}
                    </>
                }
            </>
        </PopUp>
    )
}
