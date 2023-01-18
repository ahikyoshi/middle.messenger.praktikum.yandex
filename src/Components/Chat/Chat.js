import * as _ from 'lodash'
import './styles.scss'

export default function chat(item){

    if(item){
        const tpl = _.template(
            '<li class="comp_chat">' +
                '<img src="<%= item.Img %>" alt="" class="comp_chat_img">' +
                '<div class="comp_chat_text">' +
                    '<h1 class="comp_chat_title"><%= item.name %></h1>' +
                    '<h2 class="comp_chat_lastMess"><%= item.lastMess %></h2>' +
                '</div>' +
                '<div class="comp_chat_lastTime"><%= item.lastTime %></div>' +
            '</li>'
        )
        return tpl({item: item})
    }




}