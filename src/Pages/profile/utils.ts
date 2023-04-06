import Router from "../../Core/Router";
import { signApi } from "../../Core/Api/singApi";
import { userApi } from "../../Core/Api/userApi";

// Функция получение данных пользователя, и заполнения данных пользователя
export function getUserData() {
    signApi.read().then((res: any) => {
        console.log(res.id)
        // Получение данных пользователя
        
        const data: any = {
            email: res.email,
            login: res.login,
            firstName: res.first_name,
            lastName: res.second_name,
            displayName: res.display_name,
            phone: res.phone
        };
        const profileImg = res.avatar;
        // Все поля ввода
        const inputs = [
            document.getElementById("profile_mail"),
            document.getElementById("profile_login"),
            document.getElementById("profile_name"),
            document.getElementById("profile_nameLast"),
            document.getElementById("profile_display_name"),
            document.getElementById("profile_phone"),
        ];
        // Заполнение полей профиля информацией о пользователе
        let i = 0;
        for (const key in data) {
            (<HTMLInputElement>inputs[i])!.value = data[key]
            i++;
        }
        // Отображаемое имя пользователя
        document.getElementById("profile_displayName")!.innerHTML = res.display_name;
        // Отображаемый аватар пользователя
        if (profileImg != null) {
            document.getElementById("profile_avatar")!.style.background = `url(https://ya-praktikum.tech/api/v2/resources/${profileImg})`;
        } else {
            document.getElementById("profile_avatar")?.setAttribute("style", "background: red");
        }
    });
}
// Функция отправки формы
export function sendNewData() {
    setTimeout(() => {

        document.getElementById("profile_form")!.addEventListener("submit", (e) => {
            e.preventDefault();

            // Форма отправки пароля
            if (location.pathname === "/settings/password") {
                const inputs = {
                    oldPassword: document.getElementById("profile_oldPassword"),
                    newPassword: document.getElementById("profile_newPassword"),
                    newPasswordAgain: document.getElementById("profile_newPasswordAgain")
                };
                // Проверка введены ли данные
                if ((<HTMLInputElement>inputs.oldPassword)!.value === "" || (<HTMLInputElement>inputs.newPassword)!.value === "") {
                    profileError("Заполните форму");
                    return false;
                }
                // Проверка на корректность валидации
                if (inputs.newPassword!.getAttribute("data_validate") === "false") {
                    profileError("Ошибка валидации");
                    return false;
                }
                // Проверка на совпадение новых паролей
                if ((<HTMLInputElement>inputs.newPassword)!.value != (<HTMLInputElement>inputs.newPasswordAgain)!.value) {
                    profileError("Новые пароли не совпадают");
                    return false;
                }
                const data = {
                    oldPassword: (<HTMLInputElement>inputs.oldPassword)!.value,
                    newPassword: (<HTMLInputElement>inputs.newPassword)!.value
                };
                userApi.password(data).then(() => {
                    Router.go("/profile");
                }).catch((e) => {
                    profileError(e.reason);
                });
            }
            // Форма отправки новых данных
            if (location.pathname === "/settings") {
                const inputs = [
                    document.getElementById("profile_mail"),
                    document.getElementById("profile_login"),
                    document.getElementById("profile_name"),
                    document.getElementById("profile_nameLast"),
                    document.getElementById("profile_display_name"),
                    document.getElementById("profile_phone"),
                ];
                const data = inputs.map((item: HTMLInputElement) => {
                    if (item!.value != "") {
                        return item!.value;
                    } else {
                        return item!.getAttribute("placeholder");
                    }
                });
                const sendData = {
                    "first_name": data[2],
                    "second_name": data[3],
                    "display_name": data[4],
                    "login": data[1],
                    "email": data[0],
                    "phone": data[5]
                };
                console.log(sendData);
                userApi.change(sendData).then(() => { getUserData(); Router.go("/profile"); }).catch((e) => { profileError(e.reason); });
            }
        });

    }, 500);
}
// Изменение аватара профиля
export function changeAvatar() {
    setTimeout(() => {

        const input: any = document.getElementById("profile_new_avatar");
        input!.addEventListener("change", () => {
            // Получение файла
            const data = new FormData();
            data.append("avatar", input!.files[0]);
            // Отправка файла
            userApi.avatar(data)
                .then((res: any) => {
                    document.getElementById("profile_avatar")!.style.background = `url(https://ya-praktikum.tech/api/v2/resources/${res.avatar})`;
                })
                .catch((e) => {
                    console.log(e);
                });
        });

    }, 500);
}
// Функция ошибки
function profileError(error: string) {
    document.getElementById("profile-error")!.innerText = error;
}
