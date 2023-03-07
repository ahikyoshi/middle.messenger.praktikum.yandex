// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import Button from "../../Components/Buttons/Buttons";
import Input from "../../Components/Inputs/Inputs";
import validate from "../../utils/validation";
// Styles
import "./styles.scss";
// Data
const user = {
    mail: "ahikyoshi@gmail.com",
    login: "ahikyoshi",
    name: "Александр",
    lastName: "Белый",
    nameInChat: "Ahiky",
    phone: "+7(989)255-36-36"
};

class profile extends Block {
    constructor(props: { pageSettings: { mode: string; }; Data: { user: { mail: string; login: string; name: string; lastName: string; nameInChat: string; phone: string; }; }; changeInfoButton: Button; changePasswordButton: Button; saveButton: Button; cencelButton: Button; returnButton: Button; mailInput: Input; loginInput: Input; nameInput: Input; lastNameInput: Input; nameInChatInput: Input; phoneInput: Input; oldPasswordInput: Input; newPasswordInput: Input; newPasswordAgainInput: Input; }) {
        super(props);
        // Set titles for page
        document.title = "Personal.chats - Профиль"
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
                    if(data.mail.getAttribute("data_validate") != "false"){
                        if(data.login.getAttribute("data_validate") != "false"){
                            if(data.name.getAttribute("data_validate") != "false"){
                                if(data.lastName.getAttribute("data_validate") != "false"){
                                    if(data.nameInChat.getAttribute("data_validate") != "false"){
                                        if(data.phone.getAttribute("data_validate") != "false"){
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
    // Render Page
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Page content
const profilePage = new profile({
    pageSettings: {
        mode: "info",
    },
    Data: {
        user: user
    },
    changeInfoButton: new Button({
        text: "Сменить данные",
        theme: "main",
        style: "profile-change-info",
        type: "button",
        id: "",
        events: {
            click: () => {
                location.pathname = "/profile/settings/info";
            }
        }
    }),
    changePasswordButton: new Button({
        text: "Сменить пароль",
        theme: "sub",
        style: "profile-change-btn",
        type: "button",
        id: "",
        events: {
            click: () => {
                location.pathname = "/profile/settings/password";
            }
        }
    }),
    saveButton: new Button({
        text: "Сохранить",
        theme: "main",
        style: "profile-change-info",
        type: "submit",
        id: "",
        events: {}
    }),
    cencelButton: new Button({
        text: "Отменить",
        theme: "sub",
        style: "profile-change-btn",
        type: "button",
        id: "",
        events: {
            click: () => {
                location.pathname = "/profile";
            }
        }
    }),
    returnButton: new Button({
        text: "<-",
        theme: "main",
        style: "profile-return-btn",
        type: "button",
        id: "",
        events: {
            click: () => {
                location.href = "/chats";
            }
        }
    }),
    mailInput: new Input({
        text: user.mail,
        name: "email",
        type: "text",
        id: "profile_mail",
        styles: "input_main settings-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event, "email");
            }
        }
    }),
    loginInput: new Input({
        text: "ahikyoshi",
        name: "login",
        type: "text",
        id: "profile_login",
        styles: "input_main settings-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event, "login");
            }
        }
    }),
    nameInput: new Input({
        text: "Александр",
        name: "first_name",
        type: "text",
        id: "profile_name",
        styles: "input_main settings-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event, "name");
            }
        }
    }),
    lastNameInput: new Input({
        text: "Белый",
        name: "second_name",
        type: "text",
        id: "profile_nameLast",
        styles: "input_main settings-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event, "last_name");
            }
        }
    }),
    nameInChatInput: new Input({
        text: "Ahiky",
        name: "display_name",
        type: "text",
        id: "profile_display_name",
        styles: "input_main settings-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event, "name");
            }
        }
    }),
    phoneInput: new Input({
        text: "+7(988)999-99-99",
        name: "phone",
        type: "tel",
        id: "profile_phone",
        styles: "input_main settings-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event, "phone");
            }
        }
    }),
    oldPasswordInput: new Input({
        text: "*****",
        name: "oldPassword",
        type: "password",
        id: "profile_oldPassword",
        styles: "input_main  settings-input",
        events: {}
    }),
    newPasswordInput: new Input({
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
    }),
    newPasswordAgainInput: new Input({
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
});
// Export
export default profilePage;
