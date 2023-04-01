import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="signUp-page">
            <form className="signUp-form" id="regist_form">
                <h1 className="signUp-title">Create a user</h1>
                <div className="signUp-inputs">
                    {props.firstNameInput}
                    {props.secondNameInput}
                    {props.emailInput}
                    {props.phoneInput}
                    {props.loginInput}
                    {props.passwordInput}
                    {props.passwordAgainInput}
                </div>
                <div id="signUp_error"></div>
                {props.signUpButton}
                {props.signInButton}
            </form>
        </main>
    );
}
