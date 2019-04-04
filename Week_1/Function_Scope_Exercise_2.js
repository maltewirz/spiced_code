/*
Write a function that takes another function as a parameter. It should wait 1.5 seconds and then run the function that was passed in.
*/

function waitthenrun(callback_fn) {
    setTimeout(callback_fn, 1500);
}

waitthenrun(function first() {
    console.log("i'm first");
});
