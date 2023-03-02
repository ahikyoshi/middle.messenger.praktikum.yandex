import React from '../../Core/JSX'
export default function template(props) {
    return (
        <>
            <nav className="chat-info">
                <div className="chat-img"></div>
                <div className="chat-name">Alex</div>
                <div className="chat-more">...</div>
            </nav>
            <div className="chat-messages">
                <div className="messages">
                    Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
                    Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
                </div>
            </div>
            <form className="chat-send" id="chat">
                <label htmlFor="#chats_files">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="#E5E5E5" className="chat-files">
                        <path d="M6.18661 12.5L13.7628 4.92389L14.7056 5.8667L7.12942 13.4428L6.18661 12.5Z" />
                        <path d="M8.70077 15.014L16.2769 7.43781L17.2197 8.38062L9.64358 15.9568L8.70077 15.014Z" />
                        <path d="M14.0435 20.3567L21.6197 12.7806L22.5625 13.7234L14.9864 21.2995L14.0435 20.3567Z" />
                        <path d="M16.5572 22.8706L24.1334 15.2945L25.0762 16.2373L17.5 23.8134L16.5572 22.8706Z" />
                        <path d="M16.5574 22.8709C13.9423 25.486 9.71178 25.4954 7.10829 22.8919C4.50479 20.2884 4.51421 16.0579 7.12933 13.4428L6.18652 12.5C3.04838 15.6381 3.03708 20.7148 6.16127 23.839C9.28546 26.9632 14.3621 26.9518 17.5002 23.8137L16.5574 22.8709Z" />
                        <path d="M21.6195 12.7806L22.5623 13.7234C25.003 11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48303 13.7627 4.92381L14.7055 5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628 21.6195 12.7806Z" />
                        <path d="M8.70068 15.0144C6.95727 16.7578 6.95099 19.5782 8.68665 21.3138C10.4223 23.0495 13.2427 23.0432 14.9861 21.2998L14.0433 20.357C12.8229 21.5774 10.8486 21.5818 9.63367 20.3668C8.41871 19.1518 8.4231 17.1776 9.64349 15.9572L8.70068 15.0144Z" />
                    </svg>
                </label>
                {props.fileButton}
                {props.chatInput}
                {props.chatButton}
            </form>
        </>
    )
}
