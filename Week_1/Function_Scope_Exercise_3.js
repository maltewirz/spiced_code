/*
Write a function that expects a number as a parameter. If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. If the number that is passed in is greater than or equal to 1000000 it should simply return the number. Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

*/


function exercise3(number) {
    if (number <= 0 || isNaN(number) == true) {
        console.log("Error");
    } else if (number >= 1000000) {
        console.log(number);
    } else {
        for (var i = number; number < 1000000; i++) {
            number *= 10;
            console.log(number);
        }
    }
}

exercise3(-1);
exercise3(23789347);
exercise3(13);
