// Core
import Block from "../../Core/Component";
import template from "./template";
import Router from "../../Core/Router";
// Components
import {Button} from "../../Components/Buttons/Buttons";
import {Input} from "../../Components/Inputs/Inputs";
// Utils
import validate from "../../utils/validation";
// Styles
import "./styles.scss";
// Data
const user = {
    mail: "ahikyoshi@gmail.com",
    login: "ahikyoshi",
    name: "Ahiky",
    lastName: "White",
    displayName: "Ahiky",
    phone: "+7(989)255-36-36"
};

export class profile extends Block {
    constructor(props: any) {
        super(props);
        // Functions
        setTimeout(() => {
            const form = document.getElementById("profile_form");
            form!.onsubmit = (event) => {
                event.preventDefault();
                if (this.props.pageSettings.mode === "password") {
                    const newPassword = (<HTMLInputElement>document.getElementById("profile_newPassword"));
                    const oldPassword = (<HTMLInputElement>document.getElementById("profile_oldPassword"));
                    if (newPassword.getAttribute("data_validate") === "true") {
                        const send = {
                            newPassword: newPassword.value,
                            oldPassword: oldPassword.value
                        };
                        console.log(send);
                    }
                }
                if (this.props.pageSettings.mode === "change") {
                    const data = {
                        mail: (<HTMLInputElement>document.getElementById("profile_mail")),
                        login: (<HTMLInputElement>document.getElementById("profile_login")),
                        name: (<HTMLInputElement>document.getElementById("profile_name")),
                        lastName: (<HTMLInputElement>document.getElementById("profile_nameLast")),
                        nameInChat: (<HTMLInputElement>document.getElementById("profile_display_name")),
                        phone: (<HTMLInputElement>document.getElementById("profile_phone"))
                    };
                    if (data.mail.getAttribute("data_validate") != "false") {
                        if (data.login.getAttribute("data_validate") != "false") {
                            if (data.name.getAttribute("data_validate") != "false") {
                                if (data.lastName.getAttribute("data_validate") != "false") {
                                    if (data.nameInChat.getAttribute("data_validate") != "false") {
                                        if (data.phone.getAttribute("data_validate") != "false") {
                                            const user = {
                                                mail: data.mail.value,
                                                login: data.login.value,
                                                name: data.name.value,
                                                lastName: data.lastName.value,
                                                nameInChat: data.nameInChat.value,
                                                phone: data.phone.value
                                            };
                                            console.log(user);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return false;
            };
        }, 500);
    }

    protected init(): void {
        // Component mode
        const path = location.pathname
        switch (path) {
            case "/profile":
                document.title = "Personal.chats - Profile"
                this.props.mode = "normal"
                this.props.mainButton = {
                    text: "Change info",
                    event: () => {
                        Router.go("/settings")
                    }
                }
                this.props.subButton = {
                    text: "change password",
                    event: () => {
                        Router.go("/settings/password")
                    }
                }
                this.props.inputs = true
                break;
            case "/settings":
                document.title = "Personal.chats - Settings"
                this.props.mode = "normal"
                this.props.mainButton = {
                    text: "Save",
                    event: () => {
                        Router.go("/profile")
                    }
                }
                this.props.subButton = {
                    text: "cancel",
                    event: () => {
                        Router.go("/profile")
                    }
                }
                break;
            case "/settings/password":
                document.title = "Personal.chats - Change password"
                this.props.mode = "password"
                this.props.mainButton = {
                    text: "Save",
                    event: () => {
                        Router.go("/profile")
                    }
                }
                this.props.subButton = {
                    text: "cancel",
                    event: () => {
                        Router.go("/profile")
                    }
                }
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
        })
        this.children.subButton = new Button({
            text: this.props.subButton.text,
            theme: "sub",
            style: "profile-change-btn",
            type: "button",
            id: "profile_sub_button",
            events: {
                click: this.props.subButton.event
            }
        })
        this.children.returnButton = new Button({
            text: "<-",
            theme: "main",
            style: "profile-return-btn",
            type: "button",
            events: {
                click: () => {
                    Router.go("/chats")
                }
            }
        })
        // Inputs
        this.children.mailInput = new Input({
            text: user.mail,
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
        })
        this.children.loginInput = new Input({
            text: user.login,
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
        })
        this.children.nameInput = new Input({
            text: user.name,
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
        })
        this.children.lastNameInput = new Input({
            text: user.lastName,
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
        })
        this.children.displayName = new Input({
            text: user.displayName,
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
        })
        this.children.phoneInput = new Input({
            text: user.phone,
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
        })
        this.children.oldPasswordInput = new Input({
            text: "*****",
            name: "oldPassword",
            type: "password",
            id: "profile_oldPassword",
            styles: "input_main  settings-input",
            events: {}
        })
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
        })
        this.children.newPasswordAgainInput = new Input({
            text: "*****",
            name: "newPasswordAgain",
            type: "password",
            id: "profile_oldPasswordAgain",
            styles: "input_main  settings-input",
            events: {
                focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                    validate(event, "password");
                }
            }
        })
    }
    // Render Page
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}







    
    

