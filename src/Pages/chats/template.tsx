import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="chats-page">
            <form action="#asd" className="chats-list">
                <div className="chats-profile">
                    {props.profileButton}
                </div>
                <div className="chats-search">
                    {props.searchInput}
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66401 7.66379C6.23209 9.09571 3.91049 9.09571 2.47856 7.66379C1.04664 6.23187 1.04664 3.91027 2.47856 2.47834C3.91049 1.04642 6.23209 1.04642 7.66401 2.47834C9.09594 3.91027 9.09594 6.23187 7.66401 7.66379ZM8.1044 9.04675C6.14417 10.5461 3.32858 10.3994 1.53576 8.6066C-0.416866 6.65398 -0.416866 3.48816 1.53576 1.53553C3.48838 -0.417088 6.6542 -0.417088 8.60682 1.53553C10.3996 3.32828 10.5464 6.1437 9.04717 8.10391L12.6139 11.6706L11.6711 12.6134L8.1044 9.04675Z" />
                        <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M7.66401 7.66379C6.23209 9.09571 3.91049 9.09571 2.47856 7.66379C1.04664 6.23187 1.04664 3.91027 2.47856 2.47834C3.91049 1.04642 6.23209 1.04642 7.66401 2.47834C9.09594 3.91027 9.09594 6.23187 7.66401 7.66379ZM8.1044 9.04675C6.14417 10.5461 3.32858 10.3994 1.53576 8.6066C-0.416866 6.65398 -0.416866 3.48816 1.53576 1.53553C3.48838 -0.417088 6.6542 -0.417088 8.60682 1.53553C10.3996 3.32828 10.5464 6.1437 9.04717 8.10391L12.6139 11.6706L11.6711 12.6134L8.1044 9.04675Z" />
                    </svg>
                </div>
                <div className="chat-list">
                    {props.ChatList}
                </div>
            </form>
            <div className="chat">
                {props.ChatSelected === false ?
                    <div className="chat-tip">Выберите чат чтобы отправить сообщение</div>
                    :
                    props.Chat
                }
            </div>
        </main>
    );
}
