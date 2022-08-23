import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div>
                <NavLink to="/Reader">Reader</NavLink>
            </div>
        </>
    )
}

export {Home}