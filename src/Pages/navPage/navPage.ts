import Block from "../../Core/Component";
import template from "./template";
import './styles.scss'
class navigation extends Block{
    constructor(props: {}){
        super("main",props);
    }

    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}

const navigationPage = new navigation({});

export default navigationPage;
