// Core
import Block from "../../../../Core/Component";
import template from "./template";
// Components
import { Button } from "../../../../Components/Buttons/Buttons";
import { Input } from "../../../../Components/Inputs/Inputs";
// Styles
import "./styles.scss";

class Component extends Block {
    constructor(props: any) {
        super(props);
    }
    // Children
    protected init(): void {
        this.props.isChatOpen = true;
        this.children.sendMessegeButton = new Button({
            text: "S",
            theme: "main",
            style: "chats-sendMessege-btn",
            type: "submit",
            id: "",
            events: {
            }
        });
        this.children.sendMessegeInput = new Input({
            text: "Youre message",
            name: "id",
            type: "text",
            id: "sendMessegeInput",
            styles: "input_main chats-sendMessege-input",
            events: {}
        });
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// export
export const SendMessege = new Component({});
