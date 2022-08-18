import React, {Component} from "react";
import './index.css'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    render() {
        return (
            <header className="header">
                <nav className="header__nav">
                    <div className="header__left"></div>
                    <div className="header__right">

                    </div>
                </nav>
            </header>
        )
    }
}