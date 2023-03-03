import React from "../../Core/JSX";
export default function template(props){
    return (
        <form className="regist-form" id="regist_form">
            <h1 className="regist-title">Регистрация</h1>
            <div className="regist-inputs">
                {props.nameInput}
                {props.lastNameInput}
                {props.emailInput}
                {props.phoneInput}  
                {props.loginInput}
                {props.passwordInput} 
                {props.passwordAgainInput}
            </div>
            {props.registerButton}
            {props.loginButton}
        </form>
    );
}
