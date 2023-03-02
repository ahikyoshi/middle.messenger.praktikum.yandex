import Block from "../../Core/Component";
import template from "./template";
// Компоненты
import Button from "../../Components/Buttons/Buttons";
import ChatsList from "../../Components/ChatsList/ChatsList";
// Стили
import './styles.scss';
import Input from "../../Components/Inputs/Inputs";
import Chat from "../../Components/Chat/Chat";

const list = [
    {name: 'Alex',lastMessage: 'Привет, как дела?',lastTime: '12.12.12',img: 'https://kartinkin.net/uploads/posts/2022-03/1648115733_4-kartinkin-net-p-yenot-poloskun-kartinki-4.jpg'},
    {name: 'Max', lastMessage: 'Слушай, играть пойдешь?',lastTime: '12.12.12',img: 'https://placepic.ru/wp-content/uploads/2018/10/interesnie_fakti_o_ejah.jpg'},
    {name: 'Elephant', lastMessage: 'Жду завтра',lastTime: '12.12.12',img: 'https://kipmu.ru/wp-content/uploads/svnsl2.jpg'}
]
class chats extends Block{
    constructor(props: { profileButton: Button; searchInput: Input; ChatList: ChatsList; ChatSelected: boolean; Chat: Chat; }){
        super("main",props)

        document.title = 'Personal.chats - Чаты'
    }

    protected render(): DocumentFragment {
        return this.compile(template,this.props)
    }
}


const chatsPage = new chats({
    profileButton: new Button({
        text: "Профиль >",
        theme: 'sub',
        style: "chats-profile-btn",
        type: 'button',
        id: '',
        events: {
            click: () => {
                location.href = '/profile'
            }
        }
    }),
    searchInput: new Input({
        text: 'Поиск',
        name: 'search',
        type: 'text',
        id: "search_placeholder",
        styles: "input_main chats-search-input",
        events: {}
    }),
    ChatList: new ChatsList({
        list: list,
        events: {
            click: () => {
                chatsPage.setProps({ChatSelected: true})
                document.title = 'Personal.chats - Alex'
            }
        }
    }),
    ChatSelected: true,
    Chat: new Chat({
        chatInput: new Input({
            text: 'Сообщение',
            name: 'message',
            type: 'text',
            id: 'message_input',
            events: {},
            styles: 'chat-message input_main'
        }),
        chatButton: new Button({
            text: '->',
            theme: 'main',
            style: 'chat-button',
            type: 'submit',
            id: '',
            events:{}
        })
    })
})
export default chatsPage
