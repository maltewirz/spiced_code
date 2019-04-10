// Make a page that has on it an element that is 200px by 200px in size and has a solid background color. Nest within that element another element that is 50px by 50px in size and has a different solid background color.

// Case 1: user clicks outer element:outer background color change randomly.
// Case 2: user clicks inner element:
//             inner background color change randomly outer background no change.

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//Case1:
var outer = document.getElementById("outer");

outer.addEventListener("click", function() {
    outer.style.backgroundColor = randomColor();
});

//Case2:
var inner = document.getElementById("inner");

inner.addEventListener("click", function() {
    inner.style.backgroundColor = randomColor();
});
