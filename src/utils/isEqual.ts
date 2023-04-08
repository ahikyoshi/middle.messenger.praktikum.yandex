function isArray(value: any){
    return Array.isArray(value)
}
function isPlainObject(value: any){
    return typeof value === "object"
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]';
}

function isArrayOrObject(value: any){
    return isPlainObject(value) || isArray(value)
}

export function isEqual(lhs: { [s: string]: unknown; } | ArrayLike<unknown>,rhs: { [x: string]: any; }){

    if(Object.keys(lhs).length !== Object.keys(rhs).length){
        return false
    }

    for( [key, value] of Object.entries(lhs)){
        const rightValue = rhs[key]
        if(isArrayOrObject(value) && isArrayOrObject(rightValue)){

            if(isEqual(value, rightValue)){
                continue;
            }
            return false
        }

        if(value !== rightValue){
            return false
        }
    }

    return true
}