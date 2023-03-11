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

class signUp extends Block{
    constructor(props: { nameInput: Input; lastNameInput: Input; emailInput: Input; phoneInput: Input; loginInput: Input; passwordInput: Input; passwordAgainInput: Input; registerButton: Button; loginButton: Button; }){
        super(props);
        // Set titles for page
        document.title = "Personal.chats - Регистрация";
        // Funcions
        setTimeout(() => {
            // Get form
            const form = document.getElementById("regist_form");
            if(form != null){
                form.onsubmit = event => {
                    event.preventDefault();
                    const elements = [
                        document.getElementById("register_name"),
                        document.getElementById("register_lastName"),
                        document.getElementById("register_mail"),
                        document.getElementById("register_phone"),
                        document.getElementById("register_login"),
                        document.getElementById("register_password"),
                        document.getElementById("register_passwordAgain")
                    ];
                    for(let i = 0; i < elements.length; i++){
                            if(elements[i].getAttribute("data_validate") != "true"){
                                return false;
                            }
                    }
    
                    const request_data = {
                        name: (<HTMLInputElement>elements[0]).value,
                        lastName: (<HTMLInputElement>elements[1]).value,
                        mail: (<HTMLInputElement>elements[2]).value,
                        phone: (<HTMLInputElement>elements[3]).value,
                        login: (<HTMLInputElement>elements[4]).value,
                        password: (<HTMLInputElement>elements[5]).value
                    };
    
                    console.log(request_data);
                };
            }

        },300);
    }
    protected init(): void {
        
    }
    // Page render
    protected render(): DocumentFragment {
        return this.compile(template,this.props);
    }
}
// Page content
// Export
export default signUp;
