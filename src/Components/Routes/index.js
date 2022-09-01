import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../Pages/Home";
import { Books } from "../../Pages/Books";
import { FreeBooks } from "../../Pages/FreeBooks";
import { Genres } from "../../Pages/Genres";
import { BuySubscription } from "../../Pages/BuySubscription";
import { NotFoundPage } from "../../Pages/NotFoundPage";
import { Layout } from "../Layout";
import { Reader } from "../../Pages/Reader";
import { useDispatch } from "react-redux";
import { isAuthed, usersList } from "../../Redux/user/actions";
import { SignIn } from "../../Pages/SignIn";
import { User } from "../../Pages/User";
import { SIGN_IN_LINK, SIGN_UP_LINK } from "../../constants";
import { PopUp } from "../PopUp/popUp";

export const Router = () => {


    const dispatch = useDispatch();
    //нужно загружать на верхнем уровне, чтобы отображались пользователи
    useEffect(() => {
        const unsubscribeUsers = dispatch(usersList());

        return () => unsubscribeUsers;
    }, []);

    // проверяет, вошел ли пользователь. Так же должно быть на верхнем уровне
    useEffect(() => {
        const unsubscribe = dispatch(isAuthed());

        return () => unsubscribe;
    }, [])

    const [modalActive, setModalActive] = useState(true);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="books" element={<Books />} />
                    <Route path="freeBooks" element={<FreeBooks />} />
                    <Route path="genres" element={<Genres />} />
                    <Route path="buySubscription" element={<BuySubscription />} />
                    <Route path={SIGN_UP_LINK} element={<SignIn />} />
                    <Route path={SIGN_IN_LINK} element={<SignIn />} />
                    <Route path="user/:userId" element={<User />} />
                    <Route path="reader" element={<Reader />} >
                    </Route>
                    <Route path="reader/noauth" element={<PopUp active={modalActive} setActive={setModalActive}>
                        <>  <h4>Оставлять комментарии могут только зарегистрированные пользователи</h4></>
                    </PopUp>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default Router