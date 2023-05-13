// Core
import Block from "../../Core/Component";
import template from "./template";
import Router from "../../Core/Router";
// Components
import { Button } from "../../Components/Buttons/Buttons";
import { Input } from "../../Components/Inputs/Inputs";
// Api
import { signApi } from "../../Core/Api/singApi";
// Utils
import { sendForm } from "./sendForm";
// Styles
import "./styles.scss";

export class signIn extends Block {
    constructor(props: null) {
        super(props);
        // Functions
        setTimeout(() => { sendForm(); 
        }, 300);
    }
    protected init(): void {
        // Document title
        document.title = "Personal.chats - Sign In";
        // Request
        signApi.read().then(() => Router.go("/messenger"));
        // Children
        this.children.signInButton = new Button({
            text: "sign in",
            theme: "main",
            style: "signIn-button",
            id: "signIn-btn",
            events: {},
            type: "submit"
        });
        this.children.signUpButton = new Button({
            text: "sign up",
            theme: "sub",
            style: "auth-reg",
            id: "auth-regist",
            type: "button",
            events: {
                click: () => {
                    Router.go("/sign-up");
                }
            }
        });
        // Inputs
        this.children.loginInput = new Input({
            text: "login",
            name: "login",
            id: "signIn_login",
            styles: "input_main signIn_login",
            type: "text",
            events: {}
        });
        this.children.passwordInput = new Input({
            text: "password",
            name: "password",
            id: "signIn_password",
            styles: "input_main signIn_password",
            type: "password",
            events: {}
        });
    }
    // Page render
    render() {
        return this.compile(template, this.props);
    }
}
