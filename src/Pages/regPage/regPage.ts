// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import Input from "../../Components/Inputs/Inputs";
import Button from "../../Components/Buttons/Buttons";
// Utils
import validate from "../../utils/validation";
// Styles
import "./styles.scss";

// Экземпляр компонента
class Page extends Block{
    constructor(props){
        super("main",props);

        document.title = 'Personal.chats - Регистрация'
        
        // Отправка формы
        setTimeout(() => {

            const form = document.getElementById('regist_form')

            if(form != null){
                form.onsubmit = event => {
                    event.preventDefault()
                    const elements = [
                        document.getElementById('register_name'),
                        document.getElementById('register_lastName'),
                        document.getElementById('register_mail'),
                        document.getElementById('register_phone'),
                        document.getElementById('register_login'),
                        document.getElementById('register_password'),
                        document.getElementById('register_passwordAgain')
                    ]
                    for(let i = 0; i < elements.length; i++){
                            if(elements[i].getAttribute('data_validate') != 'true'){
                                return false
                            }
                    }
    
                    const request_data = {
                        name: (<HTMLInputElement>elements[0]).value,
                        lastName: (<HTMLInputElement>elements[1]).value,
                        mail: (<HTMLInputElement>elements[2]).value,
                        phone: (<HTMLInputElement>elements[3]).value,
                        login: (<HTMLInputElement>elements[4]).value,
                        password: (<HTMLInputElement>elements[5]).value
                    }
    
                    console.log(request_data)
                }
            }

        },300)
    }

    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
// Компонент
const registPage = new Page({
    nameInput: new Input({
        text: "Имя",
        id: "register_name", 
        name: 'first_name',
        type: 'text',
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'name')
            }
        }
    }),
    lastNameInput: new Input({
        text: "Фамилия", 
        id: "register_lastName", 
        name: "second_name",
        type: 'text',
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'last_name')
            }
        }
    }),
    emailInput: new Input({
        text: "Почта",
        name: "email", 
        type: "email", 
        id: "register_mail", 
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'email')
            }
        }
    }),
    phoneInput: new Input({
        text: "Телефон",
        name: 'phone', 
        type: 'tel', 
        id: "register_phone", 
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'phone')
            }
        }
    }),
    loginInput: new Input({
        text: 'Логин',
        name: 'login',
        type: 'text',
        id: "register_login",
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'name')
            }
        }
    }),
    passwordInput: new Input({
        text: "*****", 
        name: 'password', 
        type: 'password', 
        id: "register_password", 
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'password')
            }
        }
    }),
    passwordAgainInput: new Input({
        text: "*****", 
        name: 'password_again', 
        type: 'password', 
        id: "register_passwordAgain", 
        styles: "input_main regist-input",
        events: {
            focusout: (event: { target: { id: string; getBoundingClientRect: () => any; }; }) => {
                validate(event,'password')
            }
        }
    }),
    registerButton: new Button({
        text: "Регистрация",
        theme: 'main',
        style: "regist-btn",
        type: 'submit',
        id: 'asd',
        events: {}
    }),
    loginButton: new Button({
        text: "Уже есть аккаут?",
        theme: 'sub',
        style: "regist-auth",
        type: 'button',
        id: 'dsa',
        events: {
            click: () => {
                location.href = '/auth'
            }
        }
    })
});
export default registPage;
