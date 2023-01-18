import * as _ from 'lodash'
import './style.scss'

export default function btn(id,value){
    const tpl = _.template(
        `<button class="comp_green_btn" id="<%= id %>"><%= value %></button>`
    )

    return tpl({value: value,id: id})
}