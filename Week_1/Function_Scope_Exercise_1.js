/*
Write a function that takes any number of numbers as parameters and returns the sum of those numbers.
*/

function sum() {
    var counter = 0;
    for (var i = 0; i < arguments.length; i++) {
        counter += arguments[i];
    }
    return counter;
}

sum(5, 10);
