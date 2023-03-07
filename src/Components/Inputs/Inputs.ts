// Core
import Block from "../../Core/Component";
import template from "./template";
// Styles
import "./styles.scss";
// Interface
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
        super(props);
        this.props.data_validate = "false";
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
// Export
export default Input;
