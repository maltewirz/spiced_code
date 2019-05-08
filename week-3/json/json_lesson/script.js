var person = {
    name: "Ryan",
    age: 32
};

// var stringifiedJSON = JSON.stringify(person);

// console.log("stringified", stringifiedJSON);
// console.log("parsed", JSON.parse(stringifiedJSON));
// console.log(JSON.parse(person)); //gives an error

// try {
//     // console.log(JSON.parse(person));    //the order matters here, the error break;
//     throw null; //it is making an intential error
//     console.log("Hello, Salt");
// } catch (error) {
//     console.log("This is not valid JSON");
//     console.log(error);
//     // console.log("this is the error", error);
// } finally {
//     console.log("i want this to happen no matter what");
// }

localStorage.setItem("name", "Ryan");
var value = localStorage.getItem("name");
console.log(value);
