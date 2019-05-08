/*
Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it.
*/

function logType(val) {
    if (val === null) {
        console.log("null!");
    } else if (Array.isArray(val)) {
        console.log("array!");
    } else if (typeof val == "object") {
        console.log("object!");
    } else if (Number.isNaN(val)) {
        console.log("not a number!");
    } else if (typeof val == "number") {
        console.log("number!");
    } else if (typeof val == "string") {
        console.log("string!");
    } else if (typeof val == "boolean") {
        console.log("boolean!");
    } else if (typeof val == "undefined") {
        console.log("undefined!");
    } else if (typeof val == "function") {
        console.log("function!");
    } else {
        console.log("i have no idea!");
    }
}

logType(7722);
logType(null);
logType("string");
logType(["Saab", "Volvo", "BMW"]);
logType({ type: "Fiat", model: "500", color: "white" });
logType(function myFunction(a, b) {
    return a * b;
});
logType(undefined);
logType(true);
logType(NaN);
logType(Symbol(2));
