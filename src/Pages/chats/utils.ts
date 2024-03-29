// Core
import Router from "../../Core/Router";
// Components
import { chatApi } from "../../Core/Api/chatsApi";
import { signApi } from "../../Core/Api/singApi";
import { chatList } from "./Components/ChatsList/ChatsList";
// import { ChatHeader } from "./Components/ChatHeader/ChatHeader";
// рендер страницы чаты
export async function componentInit(props: { user: any; chats: unknown; }) {
    // Получение данных пользователя
    await signApi.read().then((res: any) => { props.user = res; localStorage.setItem("userId", res.id); }).catch(() => Router.go("/"));
    setNavigationData(props);
    // Получение списков чата
    await chatApi.get().then((res) => {props.chats = res;}).catch((e) => console.log(e));

    chatList.setProps({
        chat_list: props.chats
    });
}
// Данные пользователя в боковой панели
function setNavigationData(props: { user: any; chats?: unknown; }) {
    chatList.setProps({
        display_name: props.user.display_name,
        avatar: `https://ya-praktikum.tech/api/v2/resources/${props.user.avatar}`
    });
}
