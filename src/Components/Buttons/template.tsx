import React from "../../Core/JSX";
export default function(props){
    return <button id={props.id === '' ? '' : props.id } type={props.type} className={props.theme === 'main' ? `button_main ${props.style}` : `button_sub ${props.style}`}>{props.text}</button>;
}
