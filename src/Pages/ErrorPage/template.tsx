import React from "../../Core/JSX";
export default function template(props) {
    return (
        <div className="error">
            <div className="error-title">{props.title}</div>
            <div className="error-text">{props.text}</div>
            {props.returnButton}
        </div>
    );
}
