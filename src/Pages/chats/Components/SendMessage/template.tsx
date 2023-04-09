import React from "../../../../Core/JSX";
export default function template(props: any) {
    if (props.chat_list === undefined) {
        props.chat_list = [];
    }
    return (
        <>
            {props.isChatOpen === true &&
                <form className="chats-sendMessege-form" id="sendMessegeForm">
                    {props.sendMessegeInput}
                    {props.sendMessegeButton}
                </form>
            }
        </>
    );
}
