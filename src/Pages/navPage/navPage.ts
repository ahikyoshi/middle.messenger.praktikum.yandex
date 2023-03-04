// Core
import Block from "../../Core/Component";
import template from "./template";
// Styles
import "./styles.scss";

class navigation extends Block{
    constructor(props: {}){
        super(props);
        // Set titles for page
        document.title = "Personal.chats - Навигация по приложению"
    }
    // Page render
    protected render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
// Page content
const navigationPage = new navigation({});
// Export
export default navigationPage;
