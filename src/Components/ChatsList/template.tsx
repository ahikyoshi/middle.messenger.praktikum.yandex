import React from "../../Core/JSX";

export default function template(props: { list: any[]; }){
    return(
        <div className="chats-messages">
            {props.list.map((item) => {
                return (
                    <div className="messages-item">
                        <div className="messages-img" style={`background-image: url(${item.img})`}></div>
                        <div className="messages-info">
                            <span className="messages-name">{item.name}</span>
                            <span className="messages-lastMessage">{item.lastMessage}</span>
                        </div>
                        <div className="messages-lastTime">{item.lastTime}</div>
                    </div>
                )
            }).join('')}
        </div>
    )
}
