// Make a page that has on it an element that is 100px by 100px in size, has absolute positioning, and has a solid background color. Add an event handler that makes this box center itself directly under the user's mouse pointer as it is moved across the screen.

//on mousemove, trigger function
document.addEventListener("mousemove", function(event) {
    //read the x and y coordinates
    var x = event.clientX;
    var y = event.clientY;
    //select the green div box
    var box = document.getElementById("box");
    //assign it the new positions
    box.style.left = x - 50 + "px";
    box.style.top = y - 50 + "px";
});
