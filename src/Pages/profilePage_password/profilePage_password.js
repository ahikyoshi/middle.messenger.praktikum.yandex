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

export default function profilePage_password(){

    const Images = {
        bg: dirt_texture,
        nav_bg: stone_texture,
        arrow_back: arrow,
        profile_icon: profile_icon
    }

    const Components = {
        save_btn: btn('profile_btn_save','Сохранить'),
        oldPassword_input: settingInput('profile_input_oldpassword','','oldpassword',true),
        newPassword_input: settingInput('profile_input_newpassword','','newpassord', true),
        newPasswordAgain_input: settingInput('profile_input_newpasswordagain','','newpasswordagain',true)
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
                '<%= Components.oldPassword_input %>' +
                '<%= Components.newPassword_input %>' +
                '<%= Components.newPasswordAgain_input %>' +
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