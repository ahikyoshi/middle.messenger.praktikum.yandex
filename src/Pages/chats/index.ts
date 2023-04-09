// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import { chatList } from "./Components/ChatsList/ChatsList";
import { ChatHeader } from "./Components/ChatHeader/ChatHeader";
import { Messeges } from "./Components/Messeges/Messeges";
import { SendMessege } from "./Components/SendMessage/SendMessage";
// Styles
import "./Styles/styles.scss";
// utils
import { componentInit } from "./utils";

export class chats extends Block {
    constructor(props: void) {
        super(props);
    }
    // Page render
    protected init(): void {
        // Document title
        document.title = "Personal.chats - Chats";
        //
        componentInit(this.props);
        // Компоненты
        this.children.chatList = chatList;
        this.children.ChatHeader = ChatHeader;
        this.children.Messeges = Messeges;
        this.children.SendMessege = SendMessege;
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
