import React, { useState } from "react";
import { PopUp } from "../Components/PopUp/popUp";
import { logIn } from "../Services/firebase";
import { CircularProgress } from "@mui/material";
import { Input } from "../Components/Input/input";
import { Button } from "../Components/Button/button";
import { Link, Navigate } from "react-router-dom";
import "../Styles/signIn.css"

const SignIn = ({ isSignUp }) => {
    const [modalActive, setModalActive] = useState(true);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSignIn = async () => {
        setLoading(true);
        try {
            await logIn(email, password);
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn();

        setEmail("");
        setPassword("");

    };

    if (isSignUp) {
        return (<Navigate replace to="/" />)
    }

    return (
        <PopUp active={modalActive} setActive={setModalActive}>
            <>
                {loading ? <CircularProgress /> :
                    <>
                        <h2>Авторизация</h2>
                        <form className="signForm" onSubmit={handleSubmit}>
                            <label htmlFor="email" className="left-column" >Email</label>
                            <Input id="email" type="email" value={email} className="right-column" onChange={handleChangeEmail} />
                            <label htmlFor="password" className="left-column">Password</label>
                            <Input id="password" type="password" value={password} className="right-column" currentPassword={password} onChange={handleChangePassword} />
                            <>
                                <Button type="submit" value="Подтвердить" />
                            </>
                            {error && <h4>{error}</h4>}
                        </form>
                        <Link to="/signUp" className="link" onClick={() => setError('')}>
                            SignUp
                        </Link>
                    </>
                }
            </>
        </PopUp>
    )
}

export { SignIn }