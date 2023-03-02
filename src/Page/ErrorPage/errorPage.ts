import Block from "../../Core/Component";
import template from "./template";
import './styles.scss'
import Button from "../../Components/Buttons/Buttons";

class error extends Block{
    constructor(props: { returnButton: Button; }){
        super("main",props);
        if(window.location.pathname === '/error/404'){
            this.props.title = '404'
            this.props.text = 'Похоже вы не туда попали'
        }else{
            this.props.title = '500'
            this.props.text = 'Мы уже исправляем это'
        }
    }

    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}

const errorPage = new error({
    returnButton: new Button({
        text: 'Вернуться на главную',
        theme: 'main',
        type: 'button',
        style: 'error-btn',
        id: '',
        events: {
            click: () => {
                location.href = '/'
            }
        }
    })
});

export default errorPage;
