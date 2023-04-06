// Core
import Block from "../../Core/Component";
import template from "./template";
import Router from "../../Core/Router";
// Components
import { Button } from "../../Components/Buttons/Buttons";
import { Input } from "../../Components/Inputs/Inputs";
// Utils
import { changeAvatar, getUserData, logout, sendNewData } from "./utils";
import validate from "../../utils/validation";
// Styles
import "./styles.scss";

export class profile extends Block {
    constructor(props: any) {
        super(props);
        // Получение данных пользователя
        getUserData();
        changeAvatar();
        sendNewData();
    }
    protected init() {
        // Component mode
        const path = location.pathname;
        switch (path) {
            case "/profile":
                document.title = "Personal.chats - Profile";
                this.props.mode = "normal";
                this.props.mainButton = {
                    text: "Change info",
                    event: () => {
                        Router.go("/settings");
                    }
                };
                this.props.subButton = {
                    text: "change password",
                    event: () => {
                        Router.go("/settings/password");
                    }
                };
                this.props.inputs = true;
                break;
            case "/settings":
                document.title = "Personal.chats - Settings";
                this.props.mode = "normal";
                this.props.mainButton = {
                    text: "Save"
                };
                this.props.subButton = {
                    text: "cancel",
                    event: () => {
                        Router.go("/profile");
                    }
                };
                break;
            case "/settings/password":
                document.title = "Personal.chats - Change password";
                this.props.mode = "password";
                this.props.mainButton = {
                    text: "Save",
                };
                this.props.subButton = {
                    text: "cancel",
                    event: () => {
                        Router.go("/profile");
                    }
                };
                break;
        }
        // Children
        // Buttons
        this.children.mainButton = new Button({
            text: this.props.mainButton.text,
            theme: "main",
            style: "profile-change-info",
            type: "submit",
            id: "profile_main_button",
            events: {
                click: this.props.mainButton.event
            }
        });
        this.children.subButton = new Button({
            text: this.props.subButton.text,
            theme: "sub",
            style: "profile-change-btn",
            type: "button",
            id: "profile_sub_button",
            events: {
                click: this.props.subButton.event
            }
        });
        this.children.returnButton = new Button({
            text: "<-",
            theme: "main",
            style: "profile-return-btn",
            type: "button",
            id: "",
            events: {
                click: () => {
                    Router.go("/messenger");
                }
            }
        });
        this.children.leaveButton = new Button({
            text: "logout",
            theme: "sub",
            style: "profile-leave-btn",
            type: "button",
            id: "",
            events: {
                click: () => {
                    logout()
                }
            }
        });
        // Inputs
        this.children.idInput = new Input({
            text: "...",
            name: "id",
            type: "text",
            id: "profile_id",
            styles: "input_main settings-id",
            readonly: true,
            events: {}
        });
        this.children.mailInput = new Input({
            text: "...",
            name: "email",
            type: "text",
            id: "profile_mail",
            styles: "input_main settings-input",
            readonly: this.props.inputs,
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "email");
                }
            }
        });
        this.children.loginInput = new Input({
            text: "...",
            name: "login",
            type: "text",
            id: "profile_login",
            styles: "input_main settings-input",
            readonly: this.props.inputs,
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "login");
                }
            }
        });
        this.children.nameInput = new Input({
            text: "...",
            name: "first_name",
            type: "text",
            id: "profile_name",
            styles: "input_main settings-input",
            readonly: this.props.inputs,
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "name");
                }
            }
        });
        this.children.lastNameInput = new Input({
            text: "...",
            name: "second_name",
            type: "text",
            id: "profile_nameLast",
            styles: "input_main settings-input",
            readonly: this.props.inputs,
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "last_name");
                }
            }
        });
        this.children.displayName = new Input({
            text: "...",
            name: "display_name",
            type: "text",
            id: "profile_display_name",
            styles: "input_main settings-input",
            readonly: this.props.inputs,
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "name");
                }
            }
        });
        this.children.phoneInput = new Input({
            text: "...",
            name: "phone",
            type: "tel",
            id: "profile_phone",
            styles: "input_main settings-input",
            readonly: this.props.inputs,
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "phone");
                }
            }
        });
        this.children.oldPasswordInput = new Input({
            text: "*****",
            name: "oldPassword",
            type: "password",
            id: "profile_oldPassword",
            styles: "input_main  settings-input",
            events: {}
        });
        this.children.newPasswordInput = new Input({
            text: "*****",
            name: "newPassword",
            type: "password",
            id: "profile_newPassword",
            styles: "input_main  settings-input",
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "password");
                }
            }
        });
        this.children.newPasswordAgainInput = new Input({
            text: "*****",
            name: "newPasswordAgain",
            type: "password",
            id: "profile_newPasswordAgain",
            styles: "input_main  settings-input",
            events: {   }
        });
    }
    // Render Page
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
