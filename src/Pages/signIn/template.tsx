import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="signIn-page">
            <form className="signIn-form" id="signIn_form">
                <h1 className="signIn-title">Sign In</h1>
                {props.loginInput}
                {props.passwordInput}
                <h2 id="signin_error"></h2>
                {props.signInButton}
                {props.signUpButton}
            </form>
        </main>
    );
}
