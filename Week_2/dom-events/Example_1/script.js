console.log("sanity check");

var button = document.getElementById("btn");

button.addEventListener("click", function() {
    console.log("clicked");
    document.querySelector("body").style.backgroundColor = "black";
});

document.addEventListener("keydown", function(arg) {
    console.log("keydown");
    console.log(arg);
    if (arg.keyCode === 78) {
        console.log("n was pressed");
        document.body.style.backgroundColor = "teal";
    }
});
