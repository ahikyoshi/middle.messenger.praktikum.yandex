// Страницы
import mainPage from "./Pages/mainPage/main";
import regPage from "./Pages/regPage/regPage";
import authPage from "./Pages/authPage/authPage";
import chatsPage from "./Pages/chatsPage/chatsPage";
import profilePage from "./Pages/profilePage/profilePage";
import profilePage_save from "./Pages/profilePage_save/profilePage_save";
import err404Page from "./Pages/errorsPage/err404Page";
import err500Page from "./Pages/errorsPage/err500Page";
// Стили
import './main.scss'
import profilePage_password from "./Pages/profilePage_password/profilePage_password";
import profilePage_changeIcon from "./Pages/profilePage_changeIcon/profilePage_changeIcon";

// Корневой элемент и путь роутинга
const root = document.getElementById('root')
const path = window.location.pathname.toLowerCase()

// роутинг
switch (path){
    case '/':
        root.innerHTML = mainPage()
        break;
    case '/auth':
        root.innerHTML = authPage()
        break;
    case '/reg':
        root.innerHTML = regPage()
        break;
    case '/chats':
        root.innerHTML = chatsPage()
        break;
    case '/profile':
        root.innerHTML = profilePage()
        break;
    case '/profile/save':
        root.innerHTML = profilePage_save()
        break;
    case '/profile/password':
        root.innerHTML = profilePage_password()
        break;
    case '/profile/change/icon':
        root.innerHTML = profilePage_changeIcon()
        break;
    case '/error500':
        root.innerHTML = err500Page()
        break;
    default:
        root.innerHTML = err404Page()
        break;
}