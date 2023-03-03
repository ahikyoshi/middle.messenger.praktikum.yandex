// Ядро
import render from "./Core/render";
// Страницы
import authPage from "./Pages/authPage/authPage";
import registPage from "./Pages/regPage/regPage";
import navigationPage from "./Pages/navPage/navPage";
import errorPage from "./Pages/ErrorPage/errorPage";
import chatsPage from "./Pages/chatsPage/chatsPage";
// Стили 
import "./styles/style.scss";
import profilePage from "./Pages/profilePage/profilePage";


// Рендер страницы по url
switch (window.location.pathname) {
    case "/":
        render("#root", navigationPage);
        break;
    case "/auth":
        render("#root", authPage);
        break;
    case "/regist":
        render("#root", registPage);
        break;
    case "/chats":
        render("#root", chatsPage);
        break;
    case "/profile":
        render("#root", profilePage);
        break;
    case "/profile/settings/info":
        render("#root", profilePage);
        break;
    case "/profile/settings/password":
        render("#root", profilePage);
        break;
    case "/error/404":
        render("#root", errorPage);
        break;
    case "/error/500":
        render("#root", errorPage);
        break;
    default:
        window.location.pathname = "/error/404";
        break;
}
