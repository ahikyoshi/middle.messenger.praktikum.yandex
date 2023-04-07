export function createMessege(item: { content: string; }){
    const element = document.createElement("div");
    element.innerText = item.content;
    element.classList.add("messeges-message");
    return element;
}
