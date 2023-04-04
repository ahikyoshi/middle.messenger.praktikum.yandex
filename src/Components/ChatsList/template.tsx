import React from "../../Core/JSX";
export default function template(props: any){
    if(props.list === undefined){
        props.list = []
    }
    return(
        <div className="chats-chatList">
            {props.list.map((item: any) => {
                 return ( 
                     <div className="chatList-item" id={`chat_${item.id}`}> 
                         <div className="chatList-img" style={`background-image: url(${item.avatar})`}></div> 
                         <div className="chatList-info"> 
                             <span className="chatList-name">{item.title}</span> 
                             <span className="chatList-lastMessage">{item.last_message === null ? "Пока нет сообщений" : item.last_message.content}</span> 
                         </div> 
                         <div className="chatList-unRead">{item.unread_count === 0 ? "" : item.unread_count}</div> 
                     </div> 
                 ); 
             }).join("")}
        </div>
    );
}
