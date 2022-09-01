import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <div>
                <NavLink to="/reader">Reader</NavLink>
            </div>
        </>
    )
}

export { Home }