import React from "../../Core/JSX";
export default function template(props: any){
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
    );
}
