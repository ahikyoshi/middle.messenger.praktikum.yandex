import Router from "../../Core/Router";
import { signApi } from "../../Core/Api/singApi";
export function sendForm(){

    const form = document.getElementById("signIn_form");
    
    form!.onsubmit = (event) => {

        event.preventDefault();

        const login = (<HTMLInputElement>document.getElementById("signIn_login")).value;
        const password = (<HTMLInputElement>document.getElementById("signIn_password")).value;
        const error = (<HTMLElement>document.getElementById("signin_error"))

        if (login === "" || password === "") {
            error.innerHTML = "Enter login and password please"
            return false;
        }

        const send = {
            login: login,
            password: password
        };
        
        signApi.signIn(send)
            .then(() => Router.go("/messenger"))
            .catch((res) => {error.innerHTML = res.reason})
    };
}
