// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import {Button} from "../../Components/Buttons/Buttons";
// Utils
import Router from "../../Core/Router";
// Styles
import "./styles.scss";

export class navigation extends Block{
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
            id: "",
            type: "button",
            events: {
                click: () => {
                    Router.go('/signup')
                }
            },
        })
        this.children.signInButton = new Button({
            text: "signIn",
            theme: "sub",
            style: "nav-link",
            id: "",
            type: "button",
            events: {
                click: () => {
                    Router.go('/signin')
                }
            }
        })
        this.children.chatsButton = new Button({
            text: "chats",
            theme: "sub",
            style: "nav-link",
            id: "",
            type: "button",
            events: {
                click: () => {
                    Router.go("/chats")
                }
            }
        })
        this.children.profileButton = new Button({
            text: "profile",
            theme: "sub",
            style: "nav-link",
            id: "",
            type: "button",
            events: {
                click: () => {
                    Router.go("/profile")
                }
            }
        })
    }
    // Page render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
