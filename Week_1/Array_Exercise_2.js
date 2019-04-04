// return array in reverse order
function changer(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        arr2.unshift(arr[i]);
    }
    return arr2;
}

console.log(changer(["1", "2", "3", "4"]));
