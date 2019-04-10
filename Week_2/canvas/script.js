var canvas = document.getElementById("canvas");

var context = canvas.getContext("2d");

//head
context.strokeStyle = "black";
context.beginPath();
context.arc(250, 100, 50, 0, Math.PI * 2);
context.stroke();

//backbone
context.strokeStyle = "black";
context.beginPath();
context.moveTo(250, 150);
context.lineTo(250, 300);
context.stroke();

//armLeft
context.strokeStyle = "black";
context.beginPath();
context.moveTo(250, 200);
context.lineTo(150, 150);
context.stroke();

//armRight
context.strokeStyle = "black";
context.beginPath();
context.moveTo(250, 200);
context.lineTo(350, 150);
context.stroke();

//legLeft
context.strokeStyle = "black";
context.beginPath();
context.moveTo(250, 300);
context.lineTo(150, 400);
context.stroke();

//legRight
context.strokeStyle = "black";
context.beginPath();
context.moveTo(250, 300);
context.lineTo(350, 400);
context.stroke();

var x = 0;
var y = 0;

document.addEventListener("keydown", function(arg) {
    if (arg.key === "ArrowUp") {
        x -= 20;
        canvas.style.top = x + "px";
    }
});

document.addEventListener("keydown", function(arg) {
    if (arg.key === "ArrowDown") {
        x += 20;
        canvas.style.top = x + "px";
    }
});

document.addEventListener("keydown", function(arg) {
    if (arg.key === "ArrowLeft") {
        y -= 20;
        canvas.style.left = y + "px";
    }
});

document.addEventListener("keydown", function(arg) {
    if (arg.key === "ArrowRight") {
        y += 20;
        canvas.style.left = y + "px";
    }
});
