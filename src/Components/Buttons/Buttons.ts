import Block from "../../Core/Component";
import template from "./template";
import './styles.scss'
interface buttonProps{
    text: string
    theme: 'main' | 'sub'
    style: string
    events: object
    type: 'submit' | 'button'
    id: string | undefined
}
class Button extends Block{
    constructor(props: buttonProps){
        super("div",props);
    }
    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
export default Button;
