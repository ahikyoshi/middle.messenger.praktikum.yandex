import { chatApi } from "../../Core/Api/chatsApi";
import { signApi } from "../../Core/Api/singApi";

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
        document.getElementById("chat_title")!.textContent = `${item.title} id: ${id}`
        document.getElementById("chat_avatar")!.style.background = `url(https://ya-praktikum.tech/api/v2/resources/${item.avatar})`
      }
    })
  })
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
    chat_block!.innerHTML = ""
    socket.close()
  })
}
