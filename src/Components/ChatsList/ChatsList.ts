import Block from "../../Core/Component";
import template from "./template";
import './styles.scss'

class ChatsList extends Block{
    constructor(props: any){
        super("div",props)
        console.log(props)
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default ChatsList;
