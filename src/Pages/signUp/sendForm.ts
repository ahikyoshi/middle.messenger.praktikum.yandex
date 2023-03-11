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
                name: (<HTMLInputElement>elements[0]).value,
                lastName: (<HTMLInputElement>elements[1]).value,
                mail: (<HTMLInputElement>elements[2]).value,
                phone: (<HTMLInputElement>elements[3]).value,
                login: (<HTMLInputElement>elements[4]).value,
                password: (<HTMLInputElement>elements[5]).value
            };

            console.log(request_data);
        };
    }
}