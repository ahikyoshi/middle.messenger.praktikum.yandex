import React from "../../Core/JSX";
export default function template(props: any) {

    return (
        <main className="profile-page">
            <div className="profile-return">
                {props.returnButton}
            </div>
            <div className="profile-settings">
                <form className="settings-form" id="profile_form">
                    <div className="settings-img"></div>
                    <h1 className="settigns-title">Александр</h1>
                    {props.mode === "normal" ?
                        <>
                            <div className="settings-item">
                                <div className="settings-item-name">Mail</div>
                                {props.mailInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">login</div>
                                {props.loginInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">First name</div>
                                {props.nameInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Last name</div>
                                {props.lastNameInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Display name</div>
                                {props.displayName}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Phone</div>
                                {props.phoneInput}
                            </div>
                        </>
                        :
                        <>
                            <div className="settings-item">
                                <div className="settings-item-name">Old password</div>
                                {props.oldPasswordInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">New password</div>
                                {props.newPasswordInput}
                            </div>
                            <div className="settings-item">
                                <div className="settings-item-name">Again new password</div>
                                {props.newPasswordAgainInput}
                            </div>
                        </>
                    }
                    <div className="settings-btns">
                        {props.mainButton}
                        {props.subButton}
                    </div>
                </form>
            </div>
        </main>
    );
}
