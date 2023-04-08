// Core
import Block from "../../../../Core/Component";
import template from "./template";
// Components
// Styles
import "./styles.scss";
import { createMessege } from "./utils";
import { SendMessege } from "../SendMessage/SendMessage";

class Component extends Block {
    constructor(props: any) {
        super(props);
        this.props.messeges_list;
    }
    protected componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (oldProps.socket != undefined) {
            oldProps.socket.close();
            SendMessege.updateComponent();
        }
        const socketData = {
            token: "",
            userId: localStorage.getItem("userId"),
            chatId: newProps.id
        };
        fetch(`https://ya-praktikum.tech/api/v2/chats/token/${socketData.chatId}`, {
            method: "POST",
            mode: "cors",
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                socketData.token = data.token;
                newProps.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${socketData.userId}/${socketData.chatId}/${socketData.token}`);
                newProps.socket.addEventListener("open", () => {
                    newProps.socket.send(JSON.stringify({
                        content: "0",
                        type: "get old",
                    }));

                    document.getElementById("sendMessegeForm")!.addEventListener("submit", (e) => {
                        e.preventDefault();
                        const message = (<HTMLInputElement>document.getElementById("sendMessegeInput")).value;
                        if(message.trim() === "" || message.trim() === " "){
                            return false
                        }
                        newProps.socket.send(JSON.stringify({
                            content: message,
                            type: "message",
                        }));
                        (<HTMLInputElement>document.getElementById("sendMessegeInput")).value = "";
                    });

                });
                newProps.socket.addEventListener("message", (event: { data: string; }) => {
                    const message_content = document.getElementById("messeges_list");
                    if (JSON.parse(event.data).length > 1) {
                        JSON.parse(event.data).reverse().forEach((item: any) => {
                            message_content?.appendChild(createMessege(item));
                        });
                    } else {
                        console.log(JSON.parse(event.data));
                        message_content!.append(createMessege(JSON.parse(event.data)));
                    }

                });
            });


        return true;
    }
    // Component render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
export const Messeges = new Component({});
