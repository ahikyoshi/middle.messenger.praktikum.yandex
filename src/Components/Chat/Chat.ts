import Block from "../../Core/Component";
import template from "./template";
import "./styles.scss";
import Button from "../Buttons/Buttons";
import Input from "../Inputs/Inputs";

class Chat extends Block{
    constructor(props: { chatInput: Input; chatButton: Button; }){
        super("div",props);

        setTimeout(()=> {
            const form = document.getElementById("chat");

                form!.onsubmit = (event) => {
                    event.preventDefault();
                    const message = (<HTMLInputElement>document.getElementById("message_input"));
                    
                    console.log({
                        message: message.value
                    });

                    message.value = "";
                    
                    return false;
                };
            
        },500);
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

export default Chat;
