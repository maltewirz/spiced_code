function sayHello() {
    console.log("Hello from my module");
}

//Option 2 to export module
module.exports.sayHello = sayHello;

//Option 1 to export module
// exports.sayHello = function sayHello() {
//     console.log("Hello from my module");
// };
