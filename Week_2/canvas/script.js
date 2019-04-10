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

// context.strokeStyle = "red";
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 100);
// context.lineTo(150, 200);
// context.lineTo(100, 100);
// context.stroke();

// context.fillStyle = "red";
// context.fill();
