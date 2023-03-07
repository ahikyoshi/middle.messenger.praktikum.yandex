import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="error-page">
            <div className="error">
                <div className="error-title">{props.title}</div>
                <div className="error-text">{props.text}</div>
                {props.returnButton}
            </div>
        </main>
    );
}
