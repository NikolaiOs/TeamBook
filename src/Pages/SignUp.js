import React, { useState } from "react";
import { PopUp } from "../Components/PopUp/popUp";
import { auth, getUserRef, register } from "../Services/firebase";
// import { CircularProgress } from "@material-ui/core";
import { CircularProgress } from "@mui/material";
import { Input } from "../Components/Input/input";
import { Button } from "../Components/Button/button";
import { Link, Navigate } from "react-router-dom";
import { set } from "firebase/database";
import "../Styles/signIn.css"

const SignUp = ({ isSignUp }) => {
    const [modalActive, setModalActive] = useState(true);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        try {
            await register(email, password);
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
            const userinfo = {
                name: user,
                id: auth.currentUser.uid,
                email: email
            };
            set(getUserRef(auth.currentUser.uid), userinfo);
        }
    };




    // нажатие кнопки - подтверждение намерения залогиниться или зарегаться
    const handleSubmit = (e) => {
        e.preventDefault();

        handleSignUp();
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
                        <h2>Регистрация</h2>
                        <form className="signForm" onSubmit={handleSubmit}>

                            <label htmlFor="upEmail" className="left-column">Email</label>
                            <Input id="upEmail" type="email" value={email} className="right-column" onChange={handleChangeEmail} />

                            <label htmlFor="upPassword" className="left-column">Password</label>
                            <Input id="upPassword" type="password" value={password} className="right-column" currentPassword={password} onChange={handleChangePassword} />

                            <label htmlFor="upUser" className="left-column">User</label>
                            <Input id="upUser" type="text" value={user} className="right-column" onChange={handleChangeUser} />

                            <Button className='button__mt3vm' type="submit" value="Подтвердить" />
                            {error && <h4>{error}</h4>}
                        </form>
                        <Link to="/signIn" className="link" onClick={() => setError('')}>
                            SignIn
                        </Link>
                    </>
                }
            </>
        </PopUp>
    )
}

export { SignUp }