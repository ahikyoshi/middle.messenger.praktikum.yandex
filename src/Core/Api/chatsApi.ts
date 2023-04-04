import { BaseAPI } from "./BaseAPI";

class Api extends BaseAPI{
    constructor(){
        super("/chats")
    }

    get(){
        return this.http.get("")
    }

    create(data: unknown): Promise<unknown> {
        return this.http.post("", data)
    }

    delete(data: any){
        return this.http.delete(data)
    }
    
}

export const chatApi = new Api()