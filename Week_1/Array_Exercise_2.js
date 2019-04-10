// Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

// return array in reverse order
function changer(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.unshift(arr[i]);
    }
    return arr2;
}

console.log(changer(["1", "2", "3", "4"]));
