// Core
import Block from "../../../../Core/Component";
import template from "./template";
// Api
import { chatApi } from "../../../../Core/Api/chatsApi";
import { userApi } from "../../../../Core/Api/userApi";
// Components
import { chatList } from "../ChatsList/ChatsList";
import { Input } from "../../../../Components/Inputs/Inputs";
// Styles
import "./styles.scss";
import { Button } from "../../../../Components/Buttons/Buttons";

class Component extends Block {
    constructor(props: any) {
        super(props);
    }
    protected init(): void {
        // State props
        this.props.isUserListOpen = false;
        this.props.isAddUserOpen = false;
        this.props.isRemoveUserOpen = false;
        // Children
        this.children.deleteButton = new Button({
            text: "delete chat",
            theme: "sub",
            style: "",
            id: "",
            type: "button",
            events: {
                click: () => {
                    const data = {
                        chatId: this.props.data.id
                    };
                    chatApi.delete(data).then(() => {
                        chatApi.get().then((res: any) => {
                            chatList.setProps({
                                chat_list: res,
                            });
                        });
                    }).catch((e) => console.log(e));
                    this.props.isChatOpen = false;
                }
            }
        });
        this.children.addUserInChat = new Button({
            text: "add user",
            theme: "sub",
            style: "",
            id: "",
            type: "button",
            events: {
                click: () => {
                    this.props.isAddUserOpen = true;
                    document.getElementById("chatAddUser")?.addEventListener("submit",(e) => {
                        e.preventDefault();
                        if(this.props.data != undefined){
                            const search_user = (<HTMLInputElement>document.getElementById("addUserInChatInput")).value;
                            userApi.searchUser({login: search_user}).then((res: any) => {
                                res.forEach((item: any) => {
                                    if(item.login === search_user){
                                        const send_data = {
                                            users: [item.id],
                                            chatId: this.props.data.id
                                        };
                                        chatApi.addUsers(send_data).then(() => this.props.isAddUserOpen = false).catch((e) => {console.log(e);});
                                    }
                                });
                            });
                        }  
                    });
                }
            }
        });
        this.children.addUserInChatInput = new Input({
            text: "user nickname",
            name: "addUser",
            type: "text",
            id: "addUserInChatInput",
            styles: "input_main chat-adduser-input",
            events: {}
        });
        this.children.addUserInChatButton = new Button({
            text: "add user",
            theme: "main",
            style: "chat-adduser-button",
            id: "",
            type: "submit",
            events: {}
        });
        this.children.addUserInChatCancel = new Button({
            text: "cancel",
            theme: "sub",
            style: "",
            id: "",
            type: "button",
            events: {
                click: () => {
                    this.props.isAddUserOpen = false;
                }
            }
        });
        this.children.removeUserInChat = new Button({
            text: "remove user",
            theme: "sub",
            style: "",
            id: "",
            type: "button",
            events: {
                click: () => {
                    this.props.isRemoveUserOpen = true;
                    document.getElementById("chatRemoveUser")?.addEventListener("submit",(e) => {
                        e.preventDefault();
                        if(this.props.data != undefined){
                            const search_user = (<HTMLInputElement>document.getElementById("RemoveUserInChatInput")).value;
                            userApi.searchUser({login: search_user}).then((res: any) => {
                                res.forEach((item: any) => {
                                    if(item.login === search_user){
                                        console.log(item);
                                        const send_data = {
                                            users: [item.id],
                                            chatId: this.props.data.id
                                        };
                                        chatApi.removeUser(send_data).then(() => this.props.isRemoveUserOpen = false).catch((e) => {console.log(e);});
                                    }
                                });
                            });
                        }  
                    });
                }
            }
        });
        this.children.removeUserInChatInput = new Input({
            text: "user nickname",
            name: "addUser",
            type: "text",
            id: "RemoveUserInChatInput",
            styles: "input_main chat-adduser-input",
            events: {}
        });
        this.children.removeUserInChatButton = new Button({
            text: "add user",
            theme: "main",
            style: "chat-adduser-button",
            id: "",
            type: "submit",
            events: {}
        });
        this.children.removeUserInChatCancel = new Button({
            text: "cancel",
            theme: "sub",
            style: "",
            id: "",
            type: "button",
            events: {
                click: () => {
                    this.props.isRemoveUserOpen = false;
                }
            }
        });
        this.children.showUsersInChat = new Button({
            text: "show users",
            theme: "sub",
            style: "",
            id: "",
            type: "button",
            events: {
                click: () => {
                    if (this.props.data != undefined) {
                        this.props.isUserListOpen = true;
                        const userListBlock = document.getElementById("usersList");
                        chatApi.getUsers(this.props.data.id).then((res:any) => {
                            res.map((item: any) => {
                                // картинка пользователя
                                const element_avatar = document.createElement("img");
                                element_avatar.classList.add("chat-userlist-img");
                                element_avatar.setAttribute("src", `https://ya-praktikum.tech/api/v2/resources//${item.avatar}`);
                                // Ник пользователя
                                const element_title = document.createElement("h1");
                                element_title.classList.add("chat-userlist-name");
                                element_title.innerText = item.display_name;
                                // элемент списка пользователей
                                const element = document.createElement("div");
                                element.classList.add("chat-userlist-item");
                                element.append(element_avatar, element_title);
                                // Вставка пользователя в список
                                userListBlock!.appendChild(element);
                            });
                        });
                    }
                }
            }
        });
        this.children.showUserClose = new Button({
            text: "close",
            theme: "sub",
            style: "chat-userlist-close",
            id: "",
            type: "button",
            events: {
                click: () => {
                    this.props.isUserListOpen = false;
                }
            }
        });
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Export
export const ChatHeader = new Component({});
