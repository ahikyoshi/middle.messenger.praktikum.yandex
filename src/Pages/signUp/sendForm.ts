import { signApi } from "../../Core/Api/singApi";
import Router from "../../Core/Router";
export function sendForm() {
    const form = document.getElementById("regist_form");
    if (form != null) {
        form.onsubmit = event => {
            event.preventDefault();
            const elements = [
                document.getElementById("register_name"),
                document.getElementById("register_lastName"),
                document.getElementById("register_mail"),
                document.getElementById("register_phone"),
                document.getElementById("register_login"),
                document.getElementById("register_password"),
                document.getElementById("register_passwordAgain")
            ];
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].getAttribute("data_validate") != "true") {
                    return false;
                }
            }

            const request_data = {
                first_name: (<HTMLInputElement>elements[0]).value,
                second_name: (<HTMLInputElement>elements[1]).value,
                login: (<HTMLInputElement>elements[4]).value,
                email: (<HTMLInputElement>elements[2]).value,
                password: (<HTMLInputElement>elements[5]).value,
                phone: (<HTMLInputElement>elements[3]).value
            };

            signApi.signUp(request_data)
            Router.go("/chats")
            console.log(request_data);
        };
    }
}