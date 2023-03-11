import React from "../../Core/JSX";
export default function template(props) {
    console.log(props)
    return (
        <main className="nav-page">
            <nav className="navigation_bar">
                {props.signUpButton}
                <a href="/auth" className="navigation_a">Авторизация</a>
                <a href="/chats" className="navigation_a">Чаты</a>
                <a href="/profile" className="navigation_a">Профиль</a>
                <a href="/error/404" className="navigation_a">404 ошибка</a>
                <a href="/error/500" className="navigation_a">500 ошибка</a>
            </nav>
        </main>
    );
}
