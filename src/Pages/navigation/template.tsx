import React from "../../Core/JSX";
export default function template(props: any) {
    console.log(props)
    return (
        <main className="nav-page">
            <nav className="navigation_bar">
                {props.signUpButton}
                {props.signInButton}
                {props.chatsButton}
                {props.profileButton}
            </nav>
        </main>
    );
}
