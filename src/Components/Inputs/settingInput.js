import * as _ from 'lodash'
import './styles.scss'
import * as planks_texture from '../../assets/images/planks_texture.png'

export default function settingInput(id,value,text,root,name){

    const data = {
        id: id,
        value: value,
        text: text,
        root: root,
        name: name
    }

    const tpl = _.template(
        '<div class="comp_settingInput" id="<%= props.id %>" style="background-image: url(<%= bg %>)">' +
        '<span class="comp_settingInput_text"><%= props.text %></span>' +
        '<input type="text" class="comp_settingInput_input" value="<%= props.value %>" name="<%= props.name %>" <%= props.root === false && "readonly" %>>' +
        '</div>'
    )

    return tpl({props: data, bg: planks_texture})
}