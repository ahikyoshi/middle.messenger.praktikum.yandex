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
  sendMessage(socket)
  // Получение базы сообщений
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify({
      content: '0',
      type: 'get old',
    }))
  });
  // Рендер сообщений
  socket.addEventListener('message', event => {
    setMessage(event.data, socketData.userId)
  });
}
// Установка титула чата
function setChatTitle(id: string){
  // Получение списка чатов
  chatApi.get().then((res) => {
    // Выбор нужного чата
    res.forEach((item) => {
      // При соответствии устанавливает аватар и титул чата
      if(item.id === id){
        document.getElementById("chat_title")!.textContent = `${item.title} id: ${id}`
        document.getElementById("chat_avatar")!.style.background = `url(https://ya-praktikum.tech/api/v2/resources/${item.avatar})`
      }
    })
  })
}
// Установка сообщения
function setMessage(data: string, userId: string){
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
    if(userId != item.user_id){
      message.classList.add("messages-right")
    }
    // Вставка сообщений на страницу
    chat_block!.append(message)
  })
}

function sendMessage(socket: WebSocket){
  document.getElementById("chat")?.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Ну не понимаю я как отправить сообщение, бъет ошибку что веб сокет уже открыт")
  })
  // const content = "Hello Diana"
  // const data = {
  //   type: 'message',
  //   content
  // }
  // socket.send(data);
}