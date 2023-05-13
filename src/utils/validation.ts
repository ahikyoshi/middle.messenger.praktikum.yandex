export default function validate(event: { target: { id: string; getBoundingClientRect: () => any } }, type:string) {
    // Определение родительского компонента
    const input = (<HTMLInputElement>document.getElementById(event.target.id));
    const coordinate = event.target.getBoundingClientRect();
    let validation_error = "";
    // Проверка на заполненность поля
    if (input.value === "") {
        validation_error = "Заполните поле";
    }
    // Валидация по типу check
    else {
        switch (type) {
            case "name":
                const regex_name = new RegExp("^[a-zа-яA-ZА-Я\-]+$");
                if (regex_name.test(input.value)) {
                    if (input.value[0] === input.value[0].toLowerCase()) {
                        validation_error = "Первая буква должна быть заглавной";
                    } else {
                        validation_error = "";
                    }
                } else {
                    validation_error = "Допускаються только буквы и тире";
                }
                break;
            case "last_name":
                const regex_lastName = new RegExp("^[a-zа-яA-ZА-Я\-]+$");
                if (regex_lastName.test(input.value)) {
                    if (input.value[0] === input.value[0].toLowerCase()) {
                        validation_error = "Первая буква должна быть заглавной";
                    } else {
                        validation_error = "";
                    }
                } else {
                    validation_error = "Допускаються только буквы и тире";
                }
                break;
            case "email":
                const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
                if (EMAIL_REGEXP.test(input.value)) {
                    validation_error = "";
                } else {
                    validation_error = "Некорректная почта";
                }
                break;
            case "phone":
                const phone_REGEXP = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
                if (phone_REGEXP.test(input.value)) {
                    validation_error = "";
                } else {
                    validation_error = "Некорректный номер телефона";
                }
                break;
            case "password":
                const password_REGEXP = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,40})\S$/;
                if (password_REGEXP.test(input.value)) {
                    validation_error = "";
                } else {
                    validation_error = "Пароль должен содержать цифру и заглавную букву, от 8 до 40 цифер";
                }
                break;
            case "login":
                const login_REGEXP = /^(?=\S*?[a-z])(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/;
                if (login_REGEXP.test(input.value)) {
                    validation_error = "";
                } else {
                    validation_error = "Должен содержать буквы, от 3 до 20 символов";
                }
                break;
        }
    }
    // Проверка на существования тултипа
    if (document.getElementById(`${input.id}_toolTip`) != null) {
        // Проверка на ошибки валидации
        if (validation_error === "") {
            input.style.borderBottom = "1px solid green";
            input.setAttribute("data_validate","true");
            document.getElementById("root")!.removeChild(document.getElementById(`${input.id}_toolTip`)!);
            
            return true;
        }
        // Выдача ошибки валидации
        else {
            input.style.borderBottom = "1px solid red";
            input.setAttribute("data_validate","false");
            document.getElementById(`${input.id}_toolTip`)!.innerText = validation_error;
        }

    }
    // Создание тултипа
    else {
        // Проверка на ошибки валидации
        if (validation_error === "") {
            input.style.borderBottom = "1px solid green";
            input.setAttribute("data_validate","true");
        }
        else {
            input.style.borderBottom = "1px solid red";
            input.setAttribute("data_validate","false");

            const tooltip = document.createElement("div");
            tooltip.innerText = validation_error;
            tooltip.classList.add("tooltip");
            tooltip.style.top = `${coordinate.top}px`;
            tooltip.style.left = `${coordinate.right + 100}px`;
            tooltip.setAttribute("id", `${input.id}_toolTip`);
            // Вставка тул типа
            document.querySelector("#root")!.append(tooltip);
        }
    }
}
