import { chatApi } from "../../../../Core/Api/chatsApi";

// Создание нового чата
export function newChat(props: any) {
    // Форма и ивент на неё
    const form = document.getElementById("newChat");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        // Название нового чата
        const newChatTitle = (<HTMLInputElement>document.getElementById("newChatInput")).value;
        // тело запроса
        const data = { title: newChatTitle };
        // Отправка запроса на создание нового чата
        chatApi.create(data).then(() => {
            chatApi.get().then((res) => {
                props.chat_list = res;
                (<HTMLInputElement>document.getElementById("newChatInput")).value = "";
                props.newChat_isOpen = false;
            });
        });
    });
}
