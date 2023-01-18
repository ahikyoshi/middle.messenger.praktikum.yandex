// Libraries
import * as _ from 'lodash'
// Styles
import './styles.scss'
// Images
import * as dirt_texture from '../../assets/images/End_Poem_background.webp'

export default function err404Page(){

    const tpl = _.template(
        '<main class="err_bg" style="background-image: url(<%= dirt_texture %>)">' +
        '<h1 class="err_title">404</h1>' +
        '<h2 class="err_subtitle">Вы не туда попали</h2>' +
        '<a href="/chats" class="err_btn">Вернуться на главную</a>' +
        '</main>'
    )

    return tpl({dirt_texture: dirt_texture})
}