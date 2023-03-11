// Core
import Block from "../../Core/Component";
import template from "./template";
import Router from "../../Core/Router";
// Components
import Input from "../../Components/Inputs/Inputs";
import Button from "../../Components/Buttons/Buttons";
// Utils
import validate from "../../utils/validation";
import { sendForm } from "./sendForm";
// Styles
import "./styles.scss";

export class signUp extends Block {
    constructor(props: null) {
        super(props);
        // Funcions
        setTimeout(() => { sendForm(); },300);
    }
    protected init(): void {
        // Document title
        document.title = "Personal.chats - Sign Up";
        // Children
        // buttons
        this.children.signUpButton = new Button({
            text: "sign up",
            theme: "main",
            style: "signUp-btn",
            type: "submit",
            id: "asd",
            events: {}
        });
        this.children.signInButton = new Button({
            text: "sign in",
            theme: "sub",
            style: "signUp-auth",
            type: "button",
            id: "dsa",
            events: {
                click: () => {
                    Router.go('/signin')
                }
            }
        });
        // Inputs
        this.children.firstNameInput = new Input({
            text: "first name",
            id: "register_name",
            name: "first_name",
            type: "text",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "name");
                }
            }
        });
        this.children.secondNameInput = new Input({
            text: "second name",
            id: "register_lastName",
            name: "second_name",
            type: "text",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "last_name");
                }
            }
        });
        this.children.emailInput = new Input({
            text: "example@test.com",
            name: "email",
            type: "email",
            id: "register_mail",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "email");
                }
            }
        });
        this.children.phoneInput = new Input({
            text: "+9(999)999-99-99",
            name: "phone",
            type: "tel",
            id: "register_phone",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "phone");
                }
            }
        });
        this.children.loginInput = new Input({
            text: "login",
            name: "login",
            type: "text",
            id: "register_login",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "name");
                }
            }
        });
        this.children.passwordInput = new Input({
            text: "*****",
            name: "password",
            type: "password",
            id: "register_password",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "password");
                }
            }
        });
        this.children.passwordAgainInput = new Input({
            text: "*****",
            name: "password_again",
            type: "password",
            id: "register_passwordAgain",
            styles: "input_main signUp-input",
            events: {
                focusout: (event: any) => {
                    validate(event, "password");
                }
            }
        });
    }
    // Page render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

