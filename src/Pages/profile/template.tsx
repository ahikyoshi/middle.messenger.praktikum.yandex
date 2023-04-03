import React from "../../Core/JSX";
export default function template(props: any) {
    return (
        <main className="profile-page">
            <div className="profile-return">
                {props.returnButton}
            </div>
            <div className="profile-content">
                <form className="profile-form" id="profile_form">
                    <div className="profile-img" id="profile_avatar">
                        <label for="profile_new_avatar" className="profile-img-change">Change avatar</label>
                    </div>
                    <input name="avatar" type="file" id="profile_new_avatar" hidden/>
                    <h1 className="profile-title" id="profile_displayName">Choose display name</h1>
                    {props.mode === "normal" ?
                        <>
                            <div className="profile-item">
                                <div className="profile-item-name">Mail</div>
                                {props.mailInput}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">login</div>
                                {props.loginInput}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">First name</div>
                                {props.nameInput}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">Last name</div>
                                {props.lastNameInput}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">Display name</div>
                                {props.displayName}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">Phone</div>
                                {props.phoneInput}
                            </div>
                        </>
                        :
                        <>
                            <div className="profile-item">
                                <div className="profile-item-name">Old password</div>
                                {props.oldPasswordInput}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">New password</div>
                                {props.newPasswordInput}
                            </div>
                            <div className="profile-item">
                                <div className="profile-item-name">Again new password</div>
                                {props.newPasswordAgainInput}
                            </div>
                        </>
                    }
                    <div id="profile-error"></div>
                    <div className="profile-btns">
                        {props.mainButton}
                        {props.subButton}
                    </div>
                    {props.leaveButton}
                </form>
            </div>
        </main>
    );
}
