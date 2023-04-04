// Core
import Block from "../../Core/Component";
import template from "./template";
// Styles
import "./styles.scss";
import { chatApi } from "../../Core/Api/chatsApi";
import Chat from "../Chat/Chat";

export class ChatsList extends Block{
    constructor(props: any){
        super(props);
        chatApi.get().then((res) => {
            this.props.list = res
            res.forEach((item) => {
                document.getElementById(`chat_${item.id}`)?.addEventListener("click",(e) => {
                    Chat.setProps({chat_id: item.id})
                })
            })
        })
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
