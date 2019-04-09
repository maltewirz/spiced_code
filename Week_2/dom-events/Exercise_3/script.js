// Make a page that has on it an element that is 100px by 100px in size and has a solid black border. When the user mouses down on this box, its background should change to a randomly selected color. When the user mouses up on it, its background should change to another randomly selected color.
//mousedown: clicks mouse on it

//get element
var box = document.getElementById("box");

//random colour generator

function randomColor() {
    var colors = ["Maroon", "Red", "Orange", "Yellow", "Olive", "Green"];
    return colors[Math.floor(Math.random() * 6)];
}

box.addEventListener("mousedown", function() {
    box.style.border = randomColor() + " solid";
});

box.addEventListener("mouseup", function() {
    box.style.border = randomColor() + " solid";
});
