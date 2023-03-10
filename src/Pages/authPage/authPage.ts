// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import Button from "../../Components/Buttons/Buttons";
import Input from "../../Components/Inputs/Inputs";
// Styles
import "./styles.scss";

class auth extends Block{
    constructor(props: { loginInput: Input; passwordInput: Input; authButton: Button; registButton: Button; }){
        super(props);
        // Set titles for page
        document.title = "Personal.chats - Авторизация";
        // Functions
        setTimeout(()=> {
            const form = document.getElementById("auth_form");

                form!.onsubmit = (event) => {
                    event.preventDefault();
                    const login = (<HTMLInputElement>document.getElementById("auth_login")).value;
                    const password = (<HTMLInputElement>document.getElementById("auth_password")).value;
    
                    if(login === "" || password === ""){
                        return false;
                    }
                    const send = {
                        login: login,
                        password: password
                    };
    
                    console.log(send);
    
                    return false;
                };
            
        },500);
    }
    // Page render
    render(){
        return this.compile(template,this.props);
    }
}
// Page content
const authPage = new auth({
    loginInput: new Input({
        text: "Логин",
        name: "login",
        id: "auth_login",
        styles: "input_main auth_login",
        type: "text",
        events: {}}),
    passwordInput: new Input({
        text: "Пароль",
        name: "password",
        id: "auth_password",
        styles: "input_main auth_password",
        type: "password",
        events: {}
    }),
    authButton: new Button({
        text: "Войти",
        theme: "main",
        style: "auth-button",
        id: "auth-btn",
        events: {},
        type: "submit"
    }),
    registButton: new Button({
        text: "Создать профиль",
        theme: "sub",
        style: "auth-reg",
        id: "auth-regist",
        type: "button",
        events: {
            click: () => {
                location.href = "/regist";
            }
        }
    })
});
// Export
export default authPage;
