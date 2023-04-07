// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
// Styles
import "./styles.scss";
// import { testChats } from "./utils";
import { openChat } from "./utils";
import { Button } from "../Buttons/Buttons";
import { Input } from "../Inputs/Inputs";

class Component extends Block {
    constructor(props: any) {
        super(props);
    }
    protected init(): void {
        this.children.chatInput = new Input({
            text: "message",
            name: "message",
            type: "text",
            id: "chat_message",
            styles: "chat-message input_main",
            events: {}
        })
        this.children.chatButton = new Button({
            text: "->",
            theme: "main",
            style: "chat-button",
            id: "",
            type: "submit",
            events: {}
        })
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Export
const Chat = new Component({})
export default Chat