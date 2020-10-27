function logType(par) {
    if (Array.isArray(par)) {
        console.log("Array!");
    } else if (typeof par === "bigint") {
        console.log("bigint!");
    } else if (typeof par === "string") {
        console.log("string!");
    } else if (typeof par === "boolean") {
        console.log("boolean!");
    } else if (par === null){
        console.log("null!");
    } else if (typeof par === "object") {
        console.log("Object!");
    } else if (typeof par === "undefined") {
        console.log("undefined!");
    } else if (isNaN(par)) {
        console.log("Not a Number!");
    } else if (typeof par === "number"){ 
        console.log("number!");
    } else if (typeof par === "function") {
        console.log("Function!");
    } else {
        console.log("I have no idea!");
    }
}


logType();


