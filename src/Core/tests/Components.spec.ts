import { TestComponent } from "./testpage";

describe("Base Component", () => {

    const testPage = new TestComponent({});

  it("Проверка на изменение пропсов", () => {
    testPage.setProps({name: "Alex"});
    expect(testPage.props).toEqual({name: "Alex"});
  });

  it("Проверка на отрисовку компонента, должен вернуть компонент", () => {
    testPage.setProps({name: "Alex"});
    expect(testPage._element!.innerHTML).toEqual("<p>Alex</p>");
  });
});