import "./button.css"


export function Button({ onClick, value, className, type }) {

    return (
        <input className={`button ${className}`} type={type} value={value} onClick={onClick} />
    )
}

