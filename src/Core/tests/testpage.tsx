// Core
import Block from "../../Core/Component";
import { template } from "./template_test";

export class TestComponent extends Block {
    constructor(props: any) {
        super(props);
    }
    // Page render
    protected init(): void {
    }
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
