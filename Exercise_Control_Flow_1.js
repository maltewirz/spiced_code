/*
Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it.
*/

function logType(val) {
    if (typeof val == "number" && isNaN(val) == false) {                   //Number works
        console.log("number");

    } else if (val === null) {                      //null works
        console.log("null");

    } else if (typeof val == "string") {            //string works
        console.log("string");

    } else if (Array.isArray(val)) {                //array works
        console.log("array");

    } else if (typeof val == "object") {            //object works
        console.log("object");

    } else if (typeof val == "function") {          //function works
        console.log("function");

    } else if (typeof val == "undefined") {         //undefined works
        console.log("undefined");

    } else if (typeof val == "boolean") {            //boolean works
        console.log("boolean");

    } else if (Number.isNaN(val)) {                         // NaN works
        console.log("not a number");

    } else {
        console.log("I have no idea");                     // No idea works
    }
}

logType(7722);
logType(null);
logType("string");
logType(["Saab", "Volvo", "BMW"]);
logType({type:"Fiat", model:"500", color:"white"});
logType(function myFunction(a, b) {return a * b;});
logType(undefined);
logType(true);
logType(NaN);
logType(Symbol(2));
