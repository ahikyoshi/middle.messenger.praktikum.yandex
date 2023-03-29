import HTTPTransport from "./HttpTransport"

export class BaseAPI {

    protected http: HTTPTransport;

    protected constructor(endpoint: string) {
        this.http = new HTTPTransport(endpoint)
    }

    public create?(data: unknown): Promise<unknown>

    public read?(identifier?: string): Promise<unknown>;

    public update?(identifier: string, data: unknown): Promise<unknown>;

    public delete?(identifier: string | number, data?: unknown): Promise<unknown>;
}