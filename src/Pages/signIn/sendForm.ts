export function sendForm(){
    const form = document.getElementById("auth_form");

    form!.onsubmit = (event) => {
        event.preventDefault();
        const login = (<HTMLInputElement>document.getElementById("auth_login")).value;
        const password = (<HTMLInputElement>document.getElementById("auth_password")).value;

        if (login === "" || password === "") {
            return false;
        }
        const send = {
            login: login,
            password: password
        };

        console.log(send);

        return false;
    };
}