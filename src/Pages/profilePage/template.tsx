import React from "../../Core/JSX";
export default function template(props: any) {
    if (location.pathname === "/profile") {
        document.title = "Personal.chats - Профиль";
        props.pageSettings.mode = "info";
    }
    if (location.pathname === "/profile/settings/info") {
        document.title = "Personal.chats - Сменить данные";
        props.pageSettings.mode = "change";
    }
    if (location.pathname === "/profile/settings/password") {
        document.title = "Personal.chats - Сменить пароль";
        props.pageSettings.mode = "password";
    }
    return (
        <main className="profile-page">
            <div className="profile-return">
                {props.returnButton}
            </div>
            <div className="profile-settings">
                <form id='profile_form' className="settings-form">
                    <div className="settings-img"></div>
                    <h1 className="settings-title">Александр</h1>
                    {props.pageSettings.mode === "password" ?
                        <>
                            <div className="settings-item">
                                <div className="settings-item-name">Старый пароль</div>
                                {props.oldPasswordInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Новый пароль</div>
                                {props.newPasswordInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Повторите новый пароль</div>
                                {props.newPasswordAgainInput}
                            </div>
                            <div className="settings-btns">
                                {props.saveButton}
                                {props.cencelButton}
                            </div>
                        </>
                        :
                        <>
                            <div className="settings-item">
                                <div className="settings-item-name">Почта</div>
                                {props.pageSettings.mode === "info" ? <div className="settings-item-content">{props.Data.user.mail}</div> : ""}
                                {props.pageSettings.mode === "change" ? props.mailInput : ""}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Логин</div>
                                {props.pageSettings.mode === "info" ? <div className="settings-item-content">{props.Data.user.login}</div> : ""}
                                {props.pageSettings.mode === "change" ? props.loginInput : ""}
                                {/* {props.pageSettings.mode === 'info' ? <div className='settings-item-content'>{props.user.login}</div> : props.loginInput} */}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Имя</div>
                                {props.pageSettings.mode === "info" ? <div className="settings-item-content">{props.Data.user.name}</div> : ""}
                                {props.pageSettings.mode === "change" ? props.nameInput : ""}
                                {/* {props.pageSettings.mode === 'info' ? <div className='settings-item-content'>{props.user.name}</div> : props.nameInput} */}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Фамилия</div>
                                {props.pageSettings.mode === "info" ? <div className="settings-item-content">{props.Data.user.lastName}</div> : ""}
                                {props.pageSettings.mode === "change" ? props.lastNameInput : ""}
                                {/* {props.pageSettings.mode === 'info' ? <div className='settings-item-content'>{props.user.lastName}</div> : props.nameLastInput} */}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Имя в чате</div>
                                {props.pageSettings.mode === "info" ? <div className="settings-item-content">{props.Data.user.nameInChat}</div> : ""}
                                {props.pageSettings.mode === "change" ? props.nameInChatInput : ""}
                                {/* {props.pageSettings.mode === 'info' ? <div className='settings-item-content'>{props.user.nameInChat}</div> : props.nameInChatInput} */}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Телефон</div>
                                {props.pageSettings.mode === "info" ? <div className="settings-item-content">{props.Data.user.phone}</div> : ""}
                                {props.pageSettings.mode === "change" ? props.phoneInput : ""}
                                {/* {props.pageSettings.mode === 'info' ? <div className='settings-item-content'>{props.user.phone}</div> : props.phoneInput} */}
                            </div>
                            <div className="settings-btns">
                                {props.pageSettings.mode === "info" ? props.changeInfoButton + props.changePasswordButton : ""}
                                {props.pageSettings.mode === "change" ? props.saveButton + props.cencelButton : ""}
                            </div>
                        </>
                    }
                </form>
            </div>
        </main>
    );
}
