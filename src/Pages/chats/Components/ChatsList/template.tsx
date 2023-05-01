import React from "../../../../Core/JSX";
export default function template(props: any) {
    if (props.chat_list === undefined) {
        props.chat_list = [];
    }
    return (
        <div className="chats-navigation" id="chatList">
            <div className="navigation-profile">
                <img src={props.avatar} alt="Youre avatar" className="navigation-profile-avatar" />
                <div className="navigation-profile-name">{props.display_name}</div>
                {props.profileButton}
            </div>
            <ul className="navigation-chatlist" >
                {props.chat_list.map((item: any) => {
                    return (
                        <li className="navigation-chatlist-item" id={`chatId_${item.id}`}>
                            <img className="navigation-chatlist-img" src={item.avatar} alt="chat avatar" />
                            <div className="asd"></div>
                            <div className="navigation-chatlist-info">
                                <div className="navigation-chatlist-name">{item.title}</div>
                                <div className="navigation-chatlist-last">{item.last_message === null ? "No messages" : item.last_message.content}</div>
                            </div>
                            {/* <div className="chatList-unRead">{item.unread_count === 0 ? "" : item.unread_count}</div>  */}
                        </li>
                    );
                }).join("")}
            </ul>
            {props.newChatButton}
            {props.newChat_isOpen === true ?
                <div className="navigation-newChat-layout">
                    <form className="navigation-newChat-form" id="newChat">
                        <div className="navigation-newChat-title">Create new chat</div>
                        {props.newChatInput}
                        {props.newChatSendButton}
                        {props.newChatCancelButton}
                    </form>
                </div>
                :
                <></>
            }
        </div>
    );
}
