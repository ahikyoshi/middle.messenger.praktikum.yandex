import React from "../../../../Core/JSX";
export default function template(props: any) {
    if(props.id != undefined)
        props.isChatOpen = true
    return (
        <>
            <div className="messeges" id="messeges_list">
                <div className={props.isChatOpen != true ? "messeges_noMesseges" : "messeges_noMesseges_hide"}>Выберите чат чтобы увидеть сообщение</div>
            </div>
        </>
    );
}
