// Core
import Block from "../../../../Core/Component";
import template from "./template";
import Router from "../../../../Core/Router";
// Components
import { Button } from "../../../../Components/Buttons/Buttons";
import { Input } from "../../../../Components/Inputs/Inputs";
import { Messeges } from "../Messeges/Messeges";
import { ChatHeader } from "../ChatHeader/ChatHeader";
// Utils
import { newChat } from "./utils";
import { isEqual } from "../../../../utils/isEqual";
// Styles
import "./styles.scss";

class Component extends Block {
    constructor(props: any) {
        super(props);
    }
    protected init(): void {
        // Props
        this.props.chat_list = [];
        // State props
        this.props.newChat_isOpen = false;
        // Children
        this.children.profileButton = new Button({
            text: "Profile",
            theme: "sub",
            style: "navigation-profile-btn",
            type: "button",
            id: "",
            events: {
                click: () => {
                    Router.go("/profile");
                }
            }
        });
        this.children.newChatInput = new Input({
            text: "Chat title",
            name: "newChatTitle",
            type: "text",
            id: "newChatInput",
            styles: "input_main navigation-newChat-input",
            events: {}
        });
        this.children.newChatButton = new Button({
            text: "Create new chat",
            theme: "sub",
            style: "navigation-newChat-btn",
            type: "button",
            id: "newChatButton",
            events: {
                click: () => {
                    this.props.newChat_isOpen = true;
                    newChat(this.props);
                }
            }
        });
        this.children.newChatSendButton = new Button({
            text: "Create new chat",
            theme: "main",
            style: "navigation-newChat-send",
            type: "submit",
            id: "",
            events: {}
        });
        this.children.newChatCancelButton = new Button({
            text: "cancel",
            theme: "sub",
            style: "navigation-newChat-cencel",
            type: "button",
            id: "",
            events: {
                click: () => {
                    this.props.newChat_isOpen = false;
                }
            }
        });
    }
    protected componentDidUpdate(oldProps: any, newProps: any): boolean {
        // Проверка на наличие списка чатов в пропсках
        if(oldProps.chat_list != undefined && newProps.chat_list != undefined){
                // Прогоняем пропсы
                newProps.chat_list.forEach((item: any) => {
                    // Меняем картинку на шаблон если ее нет
                    if (item.avatar === null) {
                        item.avatar = "https://sun9-2.userapi.com/impg/Jm6zvW5vic20JtwJZ2LfI6ekmrlD-oxpu3PsLA/51hs3lOtIyE.jpg?size=1051x1080&quality=95&sign=783170df0e41f19239b42e6e2f63bb25&c_uniq_tag=pTQKDny7JUpQrxS_NexcLtAr65IsX8GJtTnOKodR9uk&type=album";
                    } else {
                        if (item.avatar === "https://sun9-2.userapi.com/impg/Jm6zvW5vic20JtwJZ2LfI6ekmrlD-oxpu3PsLA/51hs3lOtIyE.jpg?size=1051x1080&quality=95&sign=783170df0e41f19239b42e6e2f63bb25&c_uniq_tag=pTQKDny7JUpQrxS_NexcLtAr65IsX8GJtTnOKodR9uk&type=album") {
                        } else {
                            item.avatar = `https://ya-praktikum.tech/api/v2/resources/${item.avatar}`;
                        }
                    }
                    // Передаем данные в шапку чата и в чат
                    setTimeout(() => {
                        document.getElementById(`chatId_${item.id}`)!.addEventListener("click", () => {
                            ChatHeader.setProps({
                                data: item,
                                isUserListOpen: false
                            });
                            Messeges.setProps({
                                id: item.id
                            });
                        });
                    }, 200);
                });

        }
        return true;
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// export
export const chatList = new Component({});
