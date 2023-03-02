export const JSX = {
  createElement(name: string, props: { [id: string]: string }, ...content: string[]) {
    props = props || {};
    const propsstr = Object.keys(props)
      .map(key => {
        const value = props[key];
        if (key === "className") {
          return `class="${value}"`;
        } else {
          return `${key}="${value}"`;
        }
      })
      // Убирает лишние объекты из пропсов
      // console.log(`<${name} ${propsstr.join(' ')}>${content.join("")}</${name}>`)
      propsstr.splice(propsstr.indexOf('__source="[object Object]"'),1)
      propsstr.splice(propsstr.indexOf('__self="[object Window]"'),1)
    // Если пустой тег, не добовляет его вообще
    if (name === undefined) {
      return `${content.join("")}`;
    }
    // Возврат результата
    return `<${name} ${propsstr.join(' ')}>${content.join("")}</${name}>`;
  },
};

export default JSX;
