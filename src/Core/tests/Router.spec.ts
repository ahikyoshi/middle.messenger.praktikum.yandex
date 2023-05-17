import Router from "../Router";
import { TestComponent } from "./testpage";

describe("core/Router", () => {
  Router.use("/test-1", TestComponent).use("/test-2", TestComponent).use("/test-3", TestComponent).start();

  it("Должен быть defined", () => {
    expect(Router).toBeDefined();
  });

  it("Проверка что все страницы загрузились в роут, должен вернуть 3", () => {
    expect(Router.routes.length).toEqual(3);
  });

});
