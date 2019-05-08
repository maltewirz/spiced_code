// Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.
//

function getLessThanZero(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

console.log(getLessThanZero([-1, 2348, 3, -27]));
