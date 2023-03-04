// Core
import Block from "../../Core/Component";
import template from "./template";
// Styles
import "./styles.scss";

class ChatsList extends Block{
    constructor(props: { list: { name: string; lastMessage: string; lastTime: string; img: string; }[]; events: { click: () => void; }; }){
        super(props);
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Export
export default ChatsList;
