import React from "react";
import {Routes, Route, MemoryRouter} from "react-router-dom";
import { Home } from "../../Pages/Home";
import { Books } from "../../Pages/Books";
import { FreeBooks } from "../../Pages/FreeBooks";
import { Genres } from "../../Pages/Genres";
import { BuySubscription } from "../../Pages/BuySubscription";
import { SignIn } from "../../Pages/SignIn";
import { NotFoundPage } from "../../Pages/NotFoundPage";
import { Layout } from "../Layout";
import { Reader } from "../../Pages/Reader";

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="books" element={<Books/>}/>
                    <Route path="freeBooks" element={<FreeBooks/>}/>
                    <Route path="genres" element={<Genres/>}/>
                    <Route path="buySubscription" element={<BuySubscription/>}/>
                    <Route path="signIn" element={<SignIn/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="reader" element={<Reader/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Router