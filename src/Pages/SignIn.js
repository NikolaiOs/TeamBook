import React, { useState } from "react";
import { PopUp } from "../Components/PopUp/popUp";
import { CircularProgress } from "@mui/material";
import { Input } from "../Components/Input/input";
import { Button } from "../Components/Button/button";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/signIn.css"
import { selectUserError, selectUserLoading } from "../Redux/user/selectors";
import { SIGN_IN, SIGN_UP, } from "../constants";
import { logInByClick, registerByClick } from "../Redux/user/actions";

export const SignIn = ({ modalActive, setModalActive }) => {
    const dispatch = useDispatch();

    let location = useLocation();
    const [isSignUp, setIsSignUp] = useState(false);
    // const [modalActive, setModalActive] = useState(true);

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

        // if (location.pathname === SIGN_UP_LINK) {
        if (isSignUp) {
            handleSignUp();
        } else {
            handleSignIn();
        }

        setModalActive(false);
        setIsSignUp(false);
        setEmail("");
        setPassword("");
        setUser("");

    };

    //нет ссылок - не нужно перекидывать на другую
    // if (isSignUp) {
    //     return (<Navigate replace to="/" />)
    // }



    return (
        <PopUp active={modalActive} setActive={setModalActive}>
            <>
                {loading ? <CircularProgress /> :
                    <>
                        {/* вместо ссылки просто компонент условно рендерится, тогда наполнение на фоне не пропадает */}
                        {/* по этой причине сравнение идет с флагом. где  true=SIGN_UP false=SIGN_IN} */}

                        {/* <h2>{location.pathname === SIGN_UP_LINK ? SIGN_UP : SIGN_IN}</h2> */}
                        <h2>{isSignUp ? SIGN_UP : SIGN_IN}</h2>
                        <form className="signForm" onSubmit={handleSubmit}>
                            <div className="signForm__content">
                                <label htmlFor="email" className="left-column">Email</label>
                                <Input id="email" type="email" value={email} className="right-column" required onChange={handleChangeEmail} />

                                <label htmlFor="password" className="left-column">Password</label>
                                <Input id="password" type="password" value={password} className="right-column" currentPassword={password} required onChange={handleChangePassword} />

                                {/* {location.pathname === SIGN_UP_LINK && <> */}
                                {isSignUp && <>
                                    <label htmlFor="user" className="left-column">Username</label>
                                    <Input id="user" type="text" value={user} className="right-column" required onChange={handleChangeUser} />
                                </>}
                            </div>
                            <Button className='button__mt3vm button__grid-row-4' type="submit" value="Подтвердить" />
                        </form>
                        {/* <Link to={location.pathname === SIGN_UP_LINK ? SIGN_IN_LINK : SIGN_UP_LINK} className="link">
                            {location.pathname === SIGN_UP_LINK ? SIGN_IN : SIGN_UP}
                        </Link> */}
                        <p className="link" onClick={() => setIsSignUp(!isSignUp)}> {isSignUp ? SIGN_IN : SIGN_UP}</p>
                        {error && <h4>{error}</h4>}
                    </>
                }
            </>
        </PopUp>
    )
}
