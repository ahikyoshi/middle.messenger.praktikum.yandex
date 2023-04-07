// Core
import Router from "../../Core/Router";
// Components
import { chatApi } from "../../Core/Api/chatsApi";
import { signApi } from "../../Core/Api/singApi";
import { chatList } from "./Components/ChatsList/ChatsList";
// рендер страницы чаты
export async function componentInit(props) {
    // Получение данных пользователя
    await signApi.read().then((res) => { props.user = res; localStorage.setItem("userId", res.id); }).catch((e) => Router.go("/"));
    setNavigationData(props);
    // Получение списков чата
    await chatApi.get().then((res) => props.chats = res).catch((e) => console.log(e));
    chatList.setProps({
        chat_list: props.chats
    });
}
// Данные пользователя в боковой панели (Все ок)
function setNavigationData(props) {
    chatList.setProps({
        display_name: props.user.display_name,
        avatar: `https://ya-praktikum.tech/api/v2/resources/${props.user.avatar}`
    });
}
