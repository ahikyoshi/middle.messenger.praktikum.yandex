// Core
import Block from "../../Core/Component";
import template from "./template";
import Router from "../../Core/Router";
// Components
import Button from "../../Components/Buttons/Buttons";
import Input from "../../Components/Inputs/Inputs";
// Utils
import { sendForm } from "./sendForm";
// Styles
import "./styles.scss";

export class signIn extends Block {
    constructor(props: null) {
        super(props);
        // Functions
        setTimeout(() => { sendForm(); }, 300);
    }
    protected init(): void {
        // Document title
        document.title = "Personal.chats - Sign In";
        // Children
        this.children.signInButton = new Button({
            text: "sign in",
            theme: "main",
            style: "auth-button",
            id: "auth-btn",
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
                    Router.go("/signup");
                }
            }
        });
        // Inputs
        this.children.loginInput = new Input({
            text: "login",
            name: "login",
            id: "auth_login",
            styles: "input_main auth_login",
            type: "text",
            events: {}
        });
        this.children.passwordInput = new Input({
            text: "password",
            name: "password",
            id: "auth_password",
            styles: "input_main auth_password",
            type: "password",
            events: {}
        });
    }
    // Page render
    render() {
        return this.compile(template, this.props);
    }
}
