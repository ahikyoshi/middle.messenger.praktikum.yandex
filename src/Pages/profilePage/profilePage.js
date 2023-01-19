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

export default function profilePage(){

    const Images = {
        bg: dirt_texture,
        nav_bg: stone_texture,
        arrow_back: arrow,
        profile_icon: profile_icon
    }

    const Components = {
        changeData_btn: btn('profile_btn_changeData','Изменить данные'),
        changePassword_btn: btn(    'profile_btn_changePassword',   'Изменить пароль'),
        first_name: settingInput(   'profile_input_firstName',      'Ahiky',    'Имя',false,'first_name'),
        second_name: settingInput(  'profile_input_secondName',     'White',    'Фамилия', false,'second_name'),
        display_name: settingInput( 'profile_input_displayName',    'Ahikyoshi','Отображаемое имя',false,'display_name'),
        login: settingInput(        'profile_input_login',          'Ahikyoshi','Логин',false,'login'),
        email: settingInput(        'profile_input_email',          'ahikyoshi@gmail.com','Почта',false,'email'),
        phone: settingInput(        'profile_input_phone',          '89882563683',        'Телефон',false,'phone')
    }

    const tpl = _.template(
        '<main class="profile_bg"  style="background-image: url(<%= img.bg %>)">' +
            '<div class="profile_nav" style="background-image: url(<%= img.nav_bg %>)">' +
                '<a href="/chats">' +
                    '<img src="<%= img.arrow_back%>" alt="Вернуться на главную" class="profile_nav_btn">' +
                '</a>' +
            '</div>' +
        '<div class="profile_content">' +
            '<div class="profile_changeicon" style="background-image: url(<%= img.profile_icon %>)">' +
                '<a href="/profile/change/icon" class="profile_changeicon_text">change</a>' +
            '</div>' +
            '<div class="profile_inputs">' +
                '<%= Components.first_name %>' +
                '<%= Components.second_name %>' +
                '<%= Components.display_name %>' +
                '<%= Components.login %>' +
                '<%= Components.email %>' +
                '<%= Components.phone %>' +
            '</div>' +
            '<div class="profile_btns">' +
                '<a href="/profile/save"><%= Components.changeData_btn %></a>' +
                '<a href="/profile/password"><%= Components.changePassword_btn %></a>' +
            '</div>' +
        '</div>' +
        '</main>'
    )

    return tpl({img: Images, Components: Components})
}
