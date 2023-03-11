import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="signIn-page">
            <form className="signIn-form" id="auth_form" action="#none">
                <h1 className="signIn-title">Авторизация</h1>
                {props.loginInput}
                {props.passwordInput}
                {props.signInButton}
                {props.signUpButton}
            </form>
        </main>
    );
}
