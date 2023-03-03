import Block from "../../Core/Component";
import template from "./template";
import "./styles.scss";

interface Props{
    text: string
    name: string
    type: string
    id: string
    styles: string
    events: object
}

class Input extends Block{
    constructor(props: Props){
        super("div",props);
        this.props.data_validate = "false";
    }

    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}

export default Input;
