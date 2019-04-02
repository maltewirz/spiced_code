/*
Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it.
*/

function logType(val) {
    if (typeof val == "number" && isNaN(val) == false) {                   //Number works
        return "number";

    } else if (val === null) {                      //null works
        return "null";

    } else if (typeof val == "string") {            //string works
        return "string";

    } else if (Array.isArray(val)) {                //array works
        return "array";

    } else if (typeof val == "object") {            //object works
        return "object";

    } else if (typeof val == "function") {          //function works
        return "function";

    } else if (typeof val == "undefined") {         //undefined works
        return "undefined";

    } else if (typeof val == "boolean") {            //boolean works
        return "boolean";

    } else if (Number.isNaN(val)) {                         // NaN works
        return "not a number";

    } else {
        return "I have no idea";                     // No idea works
    }
}

console.log(logType(7722));
console.log(logType(null));
console.log(logType("string"));
console.log(logType(["Saab", "Volvo", "BMW"]));
console.log(logType({type:"Fiat", model:"500", color:"white"}));
console.log(logType(function myFunction(a, b) {return a * b;}));
console.log(logType(undefined));
console.log(logType(true));
console.log(logType(NaN));
console.log(logType(Symbol(2)));

/*
"number!"
"string!"
"null!"
"array!"
"object!"
"function!"
"undefined!"
"boolean!"
"not a number!"
"I have no idea!"
*/
