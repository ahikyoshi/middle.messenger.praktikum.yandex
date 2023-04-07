import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="chats">
            {props.chatList}
            <div className="chat">
                { props.ChatHeader}
                {props.Messeges}
                {props.SendMessege}
            </div>
        </main>
    );
}
