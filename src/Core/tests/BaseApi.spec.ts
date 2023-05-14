import HTTPTransport from "../Api/HttpTransport";

describe("baseApi", () => {

    const request = new HTTPTransport("/auth");

    it("Должен быть ответ с сервера что куки не валидны", () => {
        request.get("/user").then((res) => expect(res).toBe({
            "reason": "Cookie is not valid"
          }));
    });
  
  });
