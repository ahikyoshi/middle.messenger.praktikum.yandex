import * as _ from 'lodash'
// Styles
import './style.scss'
// Components
import btn from '../../Components/Btns/btn'
import settingInput from "../../Components/Inputs/settingInput";
// Images
import * as arrow from '../../assets/images/arrow_icon.svg'
import * as stone_texture from '../../assets/images/stone_texture.png'
import * as dirt_texture from '../../assets/images/End_Poem_background.webp'
import * as profile_icon from '../../assets/images/Skeleton_profile_img.jpg'

export default function profilePage_save(){

    const Images = {
        bg: dirt_texture,
        nav_bg: stone_texture,
        arrow_back: arrow,
        profile_icon: profile_icon
    }

    const Components = {
        save_btn: btn('profile_btn_save','Сохранить','sumbit'),
        first_name: settingInput(   'profile_input_firstName',      'Ahiky',    'Имя',true,'first_name'),
        second_name: settingInput(  'profile_input_secondName',     'White',    'Фамилия', true,'second_name'),
        display_name: settingInput( 'profile_input_displayName',    'Ahikyoshi','Отображаемое имя',true,'display_name'),
        login: settingInput(        'profile_input_login',          'Ahikyoshi','Логин',true,'login'),
        email: settingInput(        'profile_input_email',          'ahikyoshi@gmail.com','Почта',true,'email'),
        phone: settingInput(        'profile_input_phone',          '89882563683',        'Телефон',true,'phone')
    }

    const tpl = _.template(
        '<main class="profile_bg"  style="background-image: url(<%= img.bg %>)">' +
            '<div class="profile_nav" style="background-image: url(<%= img.nav_bg %>)">' +
                '<a href="/chats">' +
                    '<img src="<%= img.arrow_back%>" alt="Вернуться на главную" class="profile_nav_btn">' +
                '</a>' +
            '</div>' +
        '<form class="profile_content" action="/profile">' +
            '<img src="<%= img.profile_icon %>" alt="Иконка профиля" class="profile_icon">' +
            '<div class="profile_inputs">' +
                '<%= Components.first_name %>' +
                '<%= Components.second_name %>' +
                '<%= Components.display_name %>' +
                '<%= Components.login %>' +
                '<%= Components.email %>' +
                '<%= Components.phone %>' +
            '</div>' +
            '<div class="profile_btns">' +
                '<%= Components.save_btn %>' +
            '</div>' +
        '</form>' +
        '</main>'
    )

    return tpl({img: Images, Components: Components})
}
