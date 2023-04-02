import Router from "../../Core/Router";
import { signApi } from "../../Core/Api/singApi";

// Функция получение данных пользователя, и заполнения данных пользователя
export function getUserData() {
    signApi.read().then((res: any) => {
        // Получение данных пользователя
        const data = {
            email: res.email,
            login: res.login,
            firstName: res.first_name,
            lastName: res.second_name,
            displayName: res.display_name,
            phone: res.phone
        }
        const profileImg = res.avatar
        // Все поля ввода
        const inputs = [
            document.getElementById("profile_mail"),
            document.getElementById("profile_login"),
            document.getElementById("profile_name"),
            document.getElementById("profile_nameLast"),
            document.getElementById("profile_display_name"),
            document.getElementById("profile_phone"),
        ]
        // Заполнение полей профиля информацией о пользователе
        let i = 0;
        for (let key in data) {
            inputs[i]?.setAttribute("placeholder", data[key])
            i++
        }
        // Отображаемое имя пользователя
        document.getElementById("profile_displayName")!.innerHTML = res.display_name;
        // Отображаемый аватар пользователя
        if (profileImg != null) {
            document.getElementById("profile_avatar")!.style.background = `url(https://ya-praktikum.tech/api/v2/resources/${profileImg})`
        } else {
            document.getElementById("profile_avatar")?.setAttribute("style", "background: red")
        }
    })
}
// Функция отправки формы
export function sendNewData() {

}