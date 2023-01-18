// Libraries
import * as _ from 'lodash'
// Components
import chat from '../../Components/Chat/Chat'
import input from "../../Components/Inputs/input";
import btn from '../../Components/Btns/btn'
// Styles
import './styles.scss'
// Images
import * as profile_icon from '../../assets/images/Skeleton_profile_img.jpg'
import * as dirt_texture from '../../assets/images/End_Poem_background.webp'
import * as stone_texture from '../../assets/images/stone_texture.png'
import * as arrow from '../../assets/images/arrow_icon.svg'
import * as plank_texture from '../../assets/images/planks_texture.png'
// db
import chat_data from "./db_shortChats";

export default function chatsPage(){

    const Images = {
        profile_icon: profile_icon,
        main_bg: dirt_texture,
        nav_bg: stone_texture,
        arrow: arrow,
        message_bg: plank_texture
    }

    const components = {
        send_input: input('chat_input','Ваше сообщение','text','message'),
        send_btn: btn('chat_btn','S'),
        file_btn: btn('file_btn','F')
    }

    const tpl = _.template(
       '<main class="chats_bg" style="background-image: url(<%= images.main_bg %>)">' +
            '<nav class="chats_nav" style="background-image: url(<%= images.nav_bg %>)">' +
                '<div class="chats_profile">' +
                    '<img src="<%= images.profile_icon %>" alt="" class="chats_profile_icon">' +
                    '<h1 class="chats_profile_title">Профиль</h1>' +
                    '<a href="/profile"><img src="<%= images.arrow %>" alt="" class="chats_profile_arrow"></a>' +
                '</div>' +
                '<input type="text" class="chats_search" placeholder="Поиск">' +
                '<ul class="chats_list">' +
                    '<% _.forEach(chat_data, function(item){%> <%= func_chat(item) %> <%} ) %>' +
                '</ul>' +
            '</nav>' +
            '<div class="chat">' +
                '<nav class="chat_nav">' +
                    '<img src="<%= images.profile_icon %>" alt="" class="chat_icon">' +
                    '<h1 class="chat_title">Creeper</h1>' +
                '</nav>' +
                '<ul class="chat_messages">' +
                    '<li class="messages" style="background-image: url(<%= images.message_bg %>)">' +
                        '<div class="messages_text">Sorry i did it!</div>' +
                        '<div class="messages_time">14:58</div>' +
                    '</li>' +
                '</ul>' +
                '<div class="chat_panel">' +
                    '<%= components.send_input %>' +
                    '<%= components.send_btn %>' +
                    '<%= components.file_btn%>' +
                '</div>' +
            '</div>' +
        '</main>'
    )

    return tpl({images: Images,components: components,chat_data: chat_data,func_chat: chat})
}