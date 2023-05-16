import React from "../../../../Core/JSX";
export default function template(props: any) {
    if (props.data === undefined) {
        props.data = {};
    }
    return (
        <>
            <div className="chat-header">
                {props.isChatOpen === true ?
                    <>
                        {/* <label for="changeChatAvatar">
                            <img src={props.data.avatar} alt="" className="chat-header-avatar" />
                        </label> */}
                        <input type="file" hidden id="changeChatAvatar" />
                        <div className="chat-header-title">{props.data.title}</div>
                        <div className="chat-header-btns">
                            <div className="chat-header-delete">{props.deleteButton}</div>
                            <div className="chat-header-addUser">{props.addUserInChat}</div>

                            <div className="chat-header-removeUser">{props.removeUserInChat}</div>
                        </div>
                        {props.isAddUserOpen === true ?
                            <form className="chat-adduser-form" id="chatAddUser">
                                <div className="chat-adduser-title">New User</div>
                                {props.addUserInChatInput}
                                {props.addUserInChatButton}
                                {props.addUserInChatCancel}
                            </form>
                            :
                            <></>
                        }
                        {props.isRemoveUserOpen === true ?
                            <form className="chat-adduser-form" id="chatRemoveUser">
                                <div className="chat-adduser-title">Remove User</div>
                                {props.removeUserInChatInput}
                                {props.removeUserInChatButton}
                                {props.removeUserInChatCancel}
                            </form>
                            :
                            <></>
                        }
                        {props.showUsersInChat}
                        {props.isUserListOpen === true ?
                            <div className="chat-header-userlist">
                                <div className="chat-userlist-title">Users in chat</div>
                                <div className="chat-userlist-items" id="usersList"></div>
                                {props.showUserClose}
                            </div>
                            :
                            <></>
                        }
                    </>
                    :
                    <></>
                }
            </div>
        </>
    );
}
