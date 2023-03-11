// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import Button from "../../Components/Buttons/Buttons";
import ChatsList from "../../Components/ChatsList/ChatsList";
import Input from "../../Components/Inputs/Inputs";
import Chat from "../../Components/Chat/Chat";
// Styles
import "./styles.scss";
// Data
const list = [
    { name: "Alex", lastMessage: "Привет, как дела?", lastTime: "12.12.12", img: "http://s4.fotokto.ru/photo/full/587/5874699.jpg" },
    { name: "Max", lastMessage: "Слушай, играть пойдешь?", lastTime: "12.12.12", img: "https://placepic.ru/wp-content/uploads/2018/10/interesnie_fakti_o_ejah.jpg" },
    { name: "Elephant", lastMessage: "Жду завтра", lastTime: "12.12.12", img: "https://kipmu.ru/wp-content/uploads/svnsl2.jpg" }
];

export class chats extends Block {
    constructor(props: void) {
        super(props);
    }
    // Page render
    protected init(): void {
        // Document title
        document.title = "Personal.chats - Chats";
        // Props
        this.props.ChatSelected = false
        // Children
        // Chats
        this.children.ChatList = new ChatsList({
            list: list,
            events: {
                click: () => {
                    this.props.ChatSelected = !this.props.ChatSelected
                    document.title = "Personal.chats - Alex";
                }
            }
        })
        // Chat
        this.children.Chat = new Chat({
            chatInput: new Input({
                text: "Сообщение",
                name: "message",
                type: "text",
                id: "message_input",
                events: {},
                styles: "chat-message input_main"
            }),
            chatButton: new Button({
                text: "->",
                theme: "main",
                style: "chat-button",
                type: "submit",
                id: "",
                events: {}
            })
        })
        // Buttons
        this.children.profileButton = new Button({
            text: "Profile >",
            theme: "sub",
            style: "chats-profile-btn",
            type: "button",
            id: "",
            events: {
                click: () => {
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

