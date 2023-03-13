// Core
import Block from "../../Core/Component";
import template from "./template";
// Styles
import "./styles.scss";
// interface
interface buttonProps{
    text: string
    theme: "main" | "sub"
    style: string
    events: object
    type: "submit" | "button"
    id: string
}

export class Button extends Block{
    constructor(props: buttonProps){
        super(props);
    }
    // Components render
    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
