// Core
import Block from "../../Core/Component";
import template from "./template";
// Styles
import "./styles.scss";
import Button from "../../Components/Buttons/Buttons";
import Router from "../../Core/Router";

class navigation extends Block{
    constructor(props: any){
        super(props);
        // Set titles for page
        document.title = "Personal.chats - Навигация по приложению"
    }
    protected init(): void {
        this.children.signUpButton = new Button({
            text: "signUp",
            theme: "sub",
            style: "nav-link",
            id: "asd",
            type: "button",
            events: {
                click: event => {
                    Router.go('/signup')
                }
            },
        })
    }
    // Page render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Export
export default navigation;
