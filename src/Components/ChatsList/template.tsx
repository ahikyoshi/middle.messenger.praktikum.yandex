import React from "../../Core/JSX";
export default function template(props: any){
    if(props.list === undefined){
        props.list = []
    }
    // Если отсутсвует аватар меняет на шаблон
    props.list.forEach((item: any) => {
        if(item.avatar === null){
            item.avatar = "https://sun9-2.userapi.com/impg/Jm6zvW5vic20JtwJZ2LfI6ekmrlD-oxpu3PsLA/51hs3lOtIyE.jpg?size=1051x1080&quality=95&sign=783170df0e41f19239b42e6e2f63bb25&c_uniq_tag=pTQKDny7JUpQrxS_NexcLtAr65IsX8GJtTnOKodR9uk&type=album"
        }else{
            item.avatar = `https://ya-praktikum.tech/api/v2/resources/${item.avatar}`
        }
    })
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
