import * as _ from 'lodash'
export default function mainPage(){

    const links = ['/auth','/reg','/chats','/profile','/error404','/error500']

    const tpl = _.template(
        '<nav>' +
        '<% _.forEach(links, function(link){ %><li><a href=<%- link %>><%- link %></a></li><% }); %>' +
        '</nav>'
    )

    return tpl({links: links})
}
