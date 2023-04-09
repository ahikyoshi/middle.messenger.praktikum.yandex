// Core
import Block from "../../Core/Component";
import template from "./template";
// Components
import { Button } from "../../Components/Buttons/Buttons";
// Styles
import "./styles.scss";

class error extends Block{
    constructor(props: { returnButton: Button; }){
        super(props);
        // Set titles for page
        document.title = "Personal.chats - Ошибка"
        // Functions
        if(window.location.pathname === "/error/404"){
            this.props.title = "404";
            this.props.text = "Похоже вы не туда попали";
        }else{
            this.props.title = "500";
            this.props.text = "Мы уже исправляем это";
        }
    }
    // Page render
    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
// Page Content
const errorPage = new error({
    returnButton: new Button({
        text: "Вернуться на главную",
        theme: "main",
        type: "button",
        style: "error-btn",
        id: "",
        events: {
            click: () => {
                location.href = "/";
            }
        }
    })
});
// Export
export default errorPage;
