function add(a, b) {
    if(typeof(a)!=="number" || typeof(b)!=="number"){
        throw new Error("types of a and b must be number")
    }
    return a + b; 
}
function subtract(a, b) {
    if(typeof(a)!=="number" || typeof(b)!=="number"){
        throw new Error("types of a and b must be number")
    }
    return a - b; 
}
function multiply(a, b) {
    if(typeof(a)!=="number" || typeof(b)!=="number"){
        throw new Error("types of a and b must be number")
    }
    return a * b;
}
function divide(a, b) {
    if(typeof(a)!=="number" || typeof(b)!=="number"){
        throw new Error("types of a and b must be number")
    }
    if(b===0){
        throw new Error("b can't be zero")
    }
    return a / b; 
}
module.exports = { add, subtract, multiply, divide };

