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

export default function profilePage_changeIcon(){

    const Images = {
        bg: dirt_texture,
        nav_bg: stone_texture,
        arrow_back: arrow,
        profile_icon: profile_icon
    }

    const Components = {
        change_icon_save_btn: btn('changeIcon_btn_save','Сохранить'),
        changeData_btn: btn('profile_btn_changeData','Изменить данные'),
        changePassword_btn: btn('profile_btn_changePassword','Изменить пароль'),
        email_input: settingInput('profile_input_email','ahikyoshi@gmail.com','email',false),
        name_input: settingInput('profile_input_name','Ahiky','Name', false),
        phone_input: settingInput('profile_input_phone','+7(988)999-99-99','phone',false),
        login_input: settingInput('profile_input_login','ahikyoshi','Login',false)
    }

    const tpl = _.template(
        '<main class="profile_bg"  style="background-image: url(<%= img.bg %>)">' +
            '<div class="profile_nav" style="background-image: url(<%= img.nav_bg %>)">' +
                '<a href="/chats">' +
                    '<img src="<%= img.arrow_back%>" alt="" class="profile_nav_btn">' +
                '</a>' +
            '</div>' +
        '<div class="profile_content">' +
            '<div class="profile_changeicon" style="background-image: url(<%= img.profile_icon %>)">' +
                '<a href="/profile/change/icon" class="profile_changeicon_text">change</a>' +
            '</div>' +
            '<div class="profile_inputs">' +
                '<%= Components.email_input %>' +
                '<%= Components.name_input %>' +
                '<%= Components.phone_input %>' +
                '<%= Components.login_input %>' +
            '</div>' +
            '<div class="profile_btns">' +
                '<a href="/profile/save"><%= Components.changeData_btn %></a>' +
                '<a href="/profile/password"><%= Components.changePassword_btn %></a>' +
            '</div>' +
        '</div>' +
        '<div class="changeIcon">' +
            '<div class="changeIcon_content" style="background-image: url(<%= img.nav_bg %>)">' +
                '<div class="changeIcon_text">выбрать файл на компьютере</div>' +
                '<input type="file" name="" id="">' +
                '<a href="/profile"><%= Components.change_icon_save_btn %></a>' +
            '</div>' +
        '</div>' +
        '</main>'
    )

    return tpl({img: Images, Components: Components})
}