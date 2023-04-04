// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import {Button} from "../../Components/Buttons/Buttons";
import {ChatsList} from "../../Components/ChatsList/ChatsList";
import {Input} from "../../Components/Inputs/Inputs";
import Chat from "../../Components/Chat/Chat";
// Styles
import "./styles.scss";
import Router from "../../Core/Router";
import { signApi } from "../../Core/Api/singApi";
// Data

export class chats extends Block {
    constructor(props: void) {
        super(props);
        signApi.read().catch((res) => Router.go("/signin"))
    }
    // Page render
    protected init(): void {
        // Document title
        document.title = "Personal.chats - Chats";
        // Props
        this.props.ChatSelected = true
        // Children
        // Chats
        this.children.ChatList = new ChatsList({})
        // Chat
        this.children.Chat = Chat
        // Buttons
        this.children.newChatButton = new Button({
            text: "+",
            theme: "main",
            style: "chats-newChat",
            type: "button",
            id: "",
            events: {
                click: () => {
                }
            }
        })
        this.children.profileButton = new Button({
            text: "Profile >",
            theme: "sub",
            style: "chats-profile-btn",
            type: "button",
            id: "",
            events: {
                click: () => {
                    Router.go("/profile")
                }
            }
        })
        // Inputs
        this.children.searchInput = new Input({
            text: "search",
            name: "search",
            type: "text",
            id: "search_placeholder",
            styles: "input_main chats-search-input",
            events: {}
        })
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

