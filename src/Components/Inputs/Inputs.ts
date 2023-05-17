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
    readonly?: boolean 
    styles: string
    events: object
}

export class Input extends Block{
    constructor(props: Props){
        super(props);

        const input = this.getContent();
        if(this.props.readonly === true){
            input?.setAttribute("readonly","readonly");
        }else{
            input?.setAttribute("data_validate","false");
            input?.setAttribute("autofocus","true");
        }
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
