import React, {Component} from "react";
import '../book.css';

function AddBtn(props) {
    return (
        <button className="addBtn" onClick={props.onClick}>
            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)">
                    <path d="M14.543 6.54H9.456V1.457a1.454 1.454 0 1 0-2.907 0v5.086h-5.09a1.46 1.46 0 0 0-.004 2.922H6.55v5.079A1.447 1.447 0 0 0 8 16c.804 0 1.455-.652 1.455-1.456v-5.08h5.087a1.462 1.462 0 0 0 0-2.925Z" fill="#9C9C9C"/>
                </g>
                <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M0 0h16v16H0z"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
    )
}

function PutAwayBtn(props) {
    return (
        <button className="putAwayBtn" onClick={props.onClick}>
            <svg width="16" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m15.531 2.912-8.44 8.44a1.602 1.602 0 0 1-2.265 0L.47 6.995A1.601 1.601 0 0 1 2.733 4.73L5.96 7.956 13.267.648a1.602 1.602 0 0 1 2.264 2.264Z" fill="#9E455A"/>
            </svg>
        </button>
    )
}

export class AddToYourLibraryBtn extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddClick = this.handleAddClick.bind(this)
        this.handlePutAwayClick = this.handlePutAwayClick.bind(this)
        this.state = {conditionBtn: false}
    }

    handleAddClick() {
        this.setState({conditionBtn: true})
    }

    handlePutAwayClick() {
        this.setState({conditionBtn: false})
    }

    render() {
        const conditionBtn = this.state.conditionBtn
        let button

        conditionBtn ? button = <PutAwayBtn onClick={this.handlePutAwayClick} /> : button = <AddBtn onClick={this.handleAddClick} />

        return (
            <>
                { button }
            </>
        )
    }
}