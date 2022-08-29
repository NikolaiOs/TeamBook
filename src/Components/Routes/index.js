import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { Books } from "../../Pages/Books";
import { FreeBooks } from "../../Pages/FreeBooks";
import { Genres } from "../../Pages/Genres";
import { BuySubscription } from "../../Pages/BuySubscription";
import { SignUp } from "../../Pages/SignUp";
import { NotFoundPage } from "../../Pages/NotFoundPage";
import { Layout } from "../Layout";
import { Reader } from "../../Pages/Reader";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../Services/firebase";
import { signIn, signOut, usersList } from "../../Redux/user/actions";
import { SignIn } from "../../Pages/SignIn";
import { selectAuth } from "../../Redux/user/selectors";
import { User } from "../../Pages/User";

export const Router = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = dispatch(usersList());
        return () => unsubscribe;
    }, []);

    const isSignUp = useSelector(selectAuth);

    //подписка на изменение авторизации, диспатчит соответствующий экшн
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        })
        //размонтирование
        return unsubscribe;
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout isSignUp={isSignUp} />}>
                    <Route index element={<Home />} />
                    <Route path="books" element={<Books />} />
                    <Route path="freeBooks" element={<FreeBooks />} />
                    <Route path="genres" element={<Genres />} />
                    <Route path="buySubscription" element={<BuySubscription />} />
                    <Route path="signUp" element={<SignUp isSignUp={isSignUp} />} />
                    <Route path="signIn" element={<SignIn isSignUp={isSignUp} />} />
                    <Route path="user/:userId" element={<User />} >
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="reader" element={<Reader />} />
                </Route>
            </Routes>
        </>
    )
}

export default Router