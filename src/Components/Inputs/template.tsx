import React from "../../Core/JSX";
export default function template(props: { text: string | undefined; id: string | undefined; styles: string | undefined; type: string | (string & {}) | undefined; name: string | undefined; data_validate: string}){
    return(
    <>
    <input 
        placeholder={props.text} 
        id={props.id} 
        className={props.styles} 
        type={props.type} 
        data_validate="false" 
        autofocus 
        name={props.name}
    /> 
    </>
    )
}
