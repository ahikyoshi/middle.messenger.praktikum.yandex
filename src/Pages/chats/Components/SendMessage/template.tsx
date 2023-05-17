import React from "../../../../Core/JSX";

export default function template(props: any) {
    return (
        <form className={props.isChatOpen === true ? "chats-sendMessege-form" : "chat-sendMessage-form_hide"} id="sendMessegeForm">
            {props.sendMessegeInput}
            {props.sendMessegeButton}
        </form>
    );
}
