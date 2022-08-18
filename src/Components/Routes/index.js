import React, {Component} from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Reader from "../Reader/index";
import "./index.css"

export default class Router extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="menu">
                    <ul className="menu__items">
                        <li className="menu__item">
                            <NavLink className="menu__link" to="/" style={({ isActive }) => ({ color: isActive ? "yellow" : "gray"})}>
                                Home
                            </NavLink>
                        </li>

                        <li className="menu__item">
                            <NavLink className="menu__link" to="/reader" style={({ isActive }) => ({ color: isActive ? "yellow" : "gray"})}>
                                Reader
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="reader" element={<Reader />} />
                    <Route path="*" element={<h2>404</h2>} />
                </Routes>
            </BrowserRouter>
        )
    }
}