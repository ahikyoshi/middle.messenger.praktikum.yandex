// libraries
import * as _ from 'lodash'
// Components
import btn from '../../Components/Btns/btn'
import input from '../../Components/Inputs/input'
// styles
import './styles.scss'
// images
import * as stone_texture from '../../assets/images/stone_texture.png'
import * as dirt_texture from '../../assets/images/End_Poem_background.webp'

export default function regPage(){

    const images = {
        stone_texture: stone_texture,
        dirt_texture: dirt_texture
    }

    const components = {
        play_btn: btn('reg_btn_play','Регистрация'),
        reg_login_input: input('reg_login_input','Логин','text','first_name'),
        reg_mail_input: input('reg_mail_input','Почта','text','email'),
        reg_name_input: input('reg_name_input','Имя','text','login'),
        reg_phone_input: input('reg_phone_input','Номер телефона','text','phone'),
        reg_password_input: input('reg_password_input','Парль','password','password'),
        reg_againPassword_input: input('reg_againPassword_input','Повторите пароль','password','password')
    }

    const tpl = _.template(
        '<main class="reg_bg" style="background-image: url(<%= images.dirt_texture %>)">' +
            '<form action="/chats" class="reg_form" style="background-image: url(<%= images.stone_texture %>)">' +
                '<h1 class="reg_title">Регистрация нового Стива</h1>' +
                '<div class="reg_inputs">' +
                    '<%= components.reg_login_input %>' +
                    '<%= components.reg_mail_input %>' +
                    '<%= components.reg_name_input %>' +
                    '<%= components.reg_phone_input %>' +
                    '<%= components.reg_password_input %>' +
                    '<%= components.reg_againPassword_input %>' +
                '</div>' +
                '<div class="reg_btns">' +
                    '<%= components.play_btn %>' +
                    '<a href="/auth" class="reg_btn_auth">Уже есть аккаунт?</a>' +
                '</div>' +
            '</form>' +
        '</main>'
    )

    return tpl({images: images,components: components})

}
