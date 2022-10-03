import React, {Component} from "react";
import '../bookDescription.css';

function AddBtn(props) {

    return (
        <button className="addBtn" onClick={props.onClick}>

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