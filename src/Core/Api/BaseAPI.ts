import HTTPTransport from "./HttpTransport";

export class BaseAPI {

    protected http: HTTPTransport;

    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint);
    }
}