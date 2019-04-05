//Declaring a variable
var x;
var xx;

//Assigning a value to x
x = 237;

function times2(num) {
    //define function times2, take num as input and return the output times 2.
    return num * 2;
}

xx = times2(x); //call times2 and pass it x, then store it in // XX:

var numbers;
numbers = [x, xx]; //assign an array to var numbers

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//create an new object and store it in numbers.
numbers = {};

//give numbers a property named why and set it to the value of // XX

numbers.why = xx;
