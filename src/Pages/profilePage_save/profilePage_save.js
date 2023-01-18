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
        save_btn: btn('profile_btn_save','Сохранить'),
        email_input: settingInput('profile_input_email','ahikyoshi@gmail.com','email',true,'email'),
        name_input: settingInput('profile_input_name','Ahiky','Name', true,'display_name'),
        phone_input: settingInput('profile_input_phone','+7(988)999-99-99','phone',true,'phone'),
        login_input: settingInput('profile_input_login','ahikyoshi','Login',true,'login')
    }

    const tpl = _.template(
        '<main class="profile_bg"  style="background-image: url(<%= img.bg %>)">' +
            '<div class="profile_nav" style="background-image: url(<%= img.nav_bg %>)">' +
                '<a href="/chats">' +
                    '<img src="<%= img.arrow_back%>" alt="" class="profile_nav_btn">' +
                '</a>' +
            '</div>' +
        '<div class="profile_content">' +
            '<img src="<%= img.profile_icon %>" alt="" class="profile_icon">' +
            '<div class="profile_inputs">' +
                '<%= Components.email_input %>' +
                '<%= Components.name_input %>' +
                '<%= Components.phone_input %>' +
                '<%= Components.login_input %>' +
            '</div>' +
            '<div class="profile_btns">' +
                '<a href="/profile"><%= Components.save_btn %></a>' +
            '</div>' +
        '</div>' +
        '</main>'
    )

    return tpl({img: Images, Components: Components})
}