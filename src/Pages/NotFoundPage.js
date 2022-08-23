import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Go</p>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export {NotFoundPage}