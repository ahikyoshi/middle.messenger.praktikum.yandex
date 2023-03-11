// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
// Styles
import "./styles.scss";

class Chat extends Block{
    constructor(props: any){
        super(props);
        // Send data function
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
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Export
export default Chat;
