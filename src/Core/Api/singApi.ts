import { BaseAPI } from "./BaseAPI";

class Api extends BaseAPI{
    constructor(){
        super("/auth");
    }

    signUp(data: object){
        return this.http.post("/signup",data);
    }

    signIn(data: object){
        return this.http.post("/signin", data);
    }

    read(){
        return this.http.get("/user");
    }

    leave(){
        return this.http.post("/logout");
    }

    create = undefined;
    delete = undefined;
    update = undefined;
}

export const signApi = new Api();
