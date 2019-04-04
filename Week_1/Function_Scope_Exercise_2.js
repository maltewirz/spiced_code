/*
Write a function that takes another function as a parameter. It should wait 1.5 seconds and then run the function that was passed in.
*/

function waitthenrun(callback_fn) {
    setTimeout(callback_fn, 1500);
}

waitthenrun(function first() {
    console.log("i'm first");
});

// function waitthenrun(callback) {
//     setTimeout(first, 1500);
//     function first() {
//         console.log("i'm first");
//     }
// }
//
//
//
// // setTimeout(function() {
// //     console.log('hello');
// // }, 1000);
//
// function add(a, b) {
//     console.log(a + b);
//     return a + b;
// }
//
// function waitthenrun(callback) {
//     setTimeout(add(20, 25), 1500);
// }
//
// waitthenrun();
