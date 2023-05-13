import { BaseAPI } from "./BaseAPI";

class Api extends BaseAPI{
    constructor(){
        super("/chats");
    }

    get(){
        return this.http.get("");
    }

    create(data: unknown): Promise<unknown> {
        return this.http.post("", data);
    }

    delete(data: any){
        return this.http.delete("",data);
    }

    avatar(data: any){
        return this.http.put("avatar", data);
    }

    getUsers(path: string){
        return this.http.get(`/${path}/users`);
    }

    addUsers(data: any){
        return this.http.put("/users",data);
    }

    removeUser(data: any){
        return this.http.delete("/users", data);
    }
    
}

export const chatApi = new Api();