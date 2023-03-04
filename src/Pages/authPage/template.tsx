import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="auth-page">
            <form className="auth-form" id="auth_form" action="#none">
                <h1 className="auth-title">Авторизация</h1>
                {props.loginInput}
                {props.passwordInput}
                {props.authButton}
                {props.registButton}
            </form>
        </main>
    );
}
