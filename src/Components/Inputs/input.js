import * as _ from 'lodash'
import './styles.scss'

export default function input(id,value,type,name){
    const tpl = _.template(
        `<input type="<%= type %>" id="<%= id %>" name="<%= name %>" placeholder="<%= value %>" class="comp_input"/>`
    )

    return tpl({value: value,id: id,type: type, name: name})
}