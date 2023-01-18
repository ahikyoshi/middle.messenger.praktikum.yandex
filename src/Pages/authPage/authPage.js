// Libraries
import * as _ from 'lodash'
// Components
import btn from '../../Components/Btns/btn'
import input from '../../Components/Inputs/input'
// Styles
import './styles.scss'
// Images
import * as dirt_texture from '../../assets/images/End_Poem_background.webp'
import * as stone_texture from  '../../assets/images/stone_texture.png'

export default function authPage(){

    const images = {
        dirt_texture: dirt_texture,
        stone_texture: stone_texture
    }

    const components = {
        btn_play: btn('auth_btn_play','Войти'),
        login_input: input('auth_input_login','Login','text','login'),
        password_input: input('auth_input_password','Password','text','password')
    }

    const tpl = _.template(
        '<main class="auth_bg" style="background-image: url(<%= images.dirt_texture %>)">' +
            '<form action="/chats" class="auth_form"  style="background-image: url(<%= images.stone_texture %>)">' +
                '<h1 class="auth_title">С возвращением!</h1>' +
                '<%= components.login_input %>' +
                '<%= components.password_input%>' +
                '<%= components.btn_play %>' +
                '<a href="/reg" class="auth_btn_reg">Нет аккаунта?</a>' +
            '</form>' +
        '</main>'
    )

    return tpl({images: images,components: components})
}
