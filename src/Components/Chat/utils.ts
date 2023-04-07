import { chatApi } from "../../Core/Api/chatsApi";
import { signApi } from "../../Core/Api/singApi";
import { chatList } from "../../Pages/chats/Components/ChatsList/ChatsList";
// Инициализация чата
export async function openChat(id: string) {
  setChatTitle(id);
  // Проверка id
  if (id === undefined) {
    return false
  }
  // Данные сокета
  let socketData = {
    token: "",
    userId: "",
    chatId: id
  };
  // Получение токена чата
  await fetch(`https://ya-praktikum.tech/api/v2/chats/token/${socketData.chatId}`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  })
    .then(response => response.json())
    .then(data => {
      socketData.token = data.token
    });
  // получение id пользователя
  await signApi.read().then((res: any) => { socketData.userId = res.id; })
  // Создание сокета и изменения формы отправки сообщения
  const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${socketData.userId}/${socketData.chatId}/${socketData.token}`)
  // Получение базы сообщений
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
      content: '0',
      type: 'get old',
    }))
    sendMessage(socket)
    closeChat(socket)
  });
  // Рендер сообщений
  socket.addEventListener('message', event => {
    // Если приходит массив, компонент перерисовывается
    if (Array.isArray(JSON.parse(event.data))) {
      setMessage(event.data, socketData.userId)
    } else {
      // Получения нового массива с сообщениями
      socket.send(JSON.stringify({
        content: "0",
        type: "get old"
      }))
    }
  });
}
// Установка титула чата
function setChatTitle(id: string) {
  // Получение списка чатов
  chatApi.get().then((res) => {
    // Выбор нужного чата
    res.forEach((item) => {
      // При соответствии устанавливает аватар и титул чата
      if (item.id === id) {
        // Кнопка опций
        setChatMore(item)
        // Титул чата
        document.getElementById("chat_title")!.textContent = `${item.title} id: ${id}`
        // Аватар чата с сервера или шаблон
        if (item.avatar != null) {
          let avatar = `https://ya-praktikum.tech/api/v2/resources/${item.avatar}`;
          document.getElementById("chat_avatar")!.style.background = `url(${avatar})`;
        } else {
          let avatar = `https://sun9-2.userapi.com/impg/Jm6zvW5vic20JtwJZ2LfI6ekmrlD-oxpu3PsLA/51hs3lOtIyE.jpg?size=1051x1080&quality=95&sign=783170df0e41f19239b42e6e2f63bb25&c_uniq_tag=pTQKDny7JUpQrxS_NexcLtAr65IsX8GJtTnOKodR9uk&type=album`;
          document.getElementById("chat_avatar")!.style.background = `url(${avatar})`;
        }
      }
    })
  })
}
// Установка блока more
function setChatMore(item) {
  // Кнопка опций чата
  const more_btn = document.createElement("div")
  more_btn.classList.add("chat-more")
  document.getElementById("chat_info")?.append(more_btn)
  more_btn!.innerHTML = "..."
  more_btn!.setAttribute("isOpen", "false")
  more_btn!.setAttribute("id", "chat_info")
  // Создания меню опций
  let more_menu = document.createElement("div")
  more_menu.classList.add("more-content")
  // Кнопка добавить пользователя
  let more_addUser = document.createElement("div")
  more_addUser.classList.add("more-item")
  more_addUser.innerHTML = "Добавить пользователя"
  more_menu.append(more_addUser)
  // Кнопка удалить пользователя
  let more_removeUser = document.createElement("div")
  more_removeUser.classList.add("more-item")
  more_removeUser.innerHTML = "Удалить пользователя"
  more_menu.append(more_removeUser)
  // Кнопка удалить чат
  let more_removeChat = document.createElement("div")
  more_removeChat.classList.add("more-item")
  more_removeChat.style.color = "red"
  more_removeChat.innerHTML = "Удалить чат"
  more_removeChat.addEventListener("click", (e) => {
    removeChat(item.id)
  })
  more_menu.append(more_removeChat)
  // Вставка меню опций на страницу
  more_btn!.append(more_menu)
  // Добавление ивента открытия и закрытия меню опций
  more_btn!.addEventListener("click", () => {
    if (more_btn?.getAttribute("isOpen") === "false") {
      more_menu.style.display = "block"
      more_btn.setAttribute("isOpen", "true")
    } else {
      console.log("close")
      more_menu.style.display = "none"
      more_btn?.setAttribute("isOpen", "false")
    }
  })
}
// Удалить чат 
function removeChat(id: string){
  const data = {
    chatId: id
  }
  chatApi.delete(data).then(() => chatList.updateComponent())
}
// Установка сообщения
function setMessage(data: string, userId: string) {
  // Парс сообщений в объект
  const messages = JSON.parse(data)
  // Блок для сообщений и очистка его от прошлых сообщений
  const chat_block = document.getElementById("chat_block")
  chat_block!.innerHTML = ""
  // Создание сообщений
  messages.reverse().forEach((item: { content: string; user_id: string; }) => {
    // Создание блока сообщений, текст, классы
    const message = document.createElement("div")
    message.innerText = item.content
    message.classList.add("messages")
    if (userId != item.user_id) {
      message.classList.add("messages-right")
    }
    // Вставка сообщений на страницу и скролл его вниз
    chat_block!.append(message)
  })
}
// Отправка сообщений
function sendMessage(socket: WebSocket) {
  // Очистка формы отправки сообщения от старых евентов
  let chat_content: any = document.getElementById("chat_content")
  let clone = document.getElementById("chat")?.cloneNode(true)
  chat_content!.innerHTML = ""
  // Функция отправки сообщения
  let sendEvent = function (e) {
    e.preventDefault()
    // Взятие контента сообщения
    const messageInput = (<HTMLInputElement>document.getElementById("chat_message"))
    // Отправка сообщения и очистка инпута
    socket.send(JSON.stringify({
      content: messageInput.value,
      type: "message"
    }))
    messageInput.value = ""
  }
  // Навешивание функции отправки сообщения и вставка новой формы
  clone!.addEventListener("submit", sendEvent)
  chat_content?.append(clone)
}
// Закрытие Сокета
function closeChat(socket: WebSocket) {
  document.getElementById("chat_list")?.addEventListener("click", () => {
    const chat_block = document.getElementById("chat_block")
    console.log(document.getElementById("chat_id"))
    chat_block!.innerHTML = ""
    socket.close()
  })
}
