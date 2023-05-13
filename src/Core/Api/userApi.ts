import { BaseAPI } from "./BaseAPI";

class Api extends BaseAPI{
    constructor(){
        super("/user");
    }

    change(data: object){
        return this.http.put("/profile", data);
    }

    avatar(data: object){
        return this.http.put("/profile/avatar", data);
    }

    password(data: object){
        return this.http.put("/password", data);
    }

    getUser(id: string){
        return this.http.get(`/${id}`);
    }

    searchUser(data: object){
        return this.http.post("/search", data);
    }

    create = undefined;
    delete = undefined;
    update = undefined;
}

export const userApi = new Api();