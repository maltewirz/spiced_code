(function() {
    //Exercise #1: Write a function that expects a string representing a selector to be passed as a parameter. The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.

    function fn(selector) {
        //selector is a string
        var temp = document.querySelectorAll(selector);
        console.log(temp);
        for (var i = 0; i < temp.length; i++) {
            temp[i].style.fontStyle = "italic";
            temp[i].style.fontWeight = "bold";
            temp[i].style.textDecoration = "underline";
        }
    }
    fn("div");

    //Exercise #2:
    // Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.

    function fn2(string) {
        var temp2 = [];
        var temp3 = document.getElementsByClassName(string);
        for (var i = 0; i < temp3.length; i++) {
            temp2.push(temp3[i]);
        }
        return temp3;
    }
    console.log(fn2("box"));

    //Exercise #3:
    // Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.

    function fn3() {
        var newElement = document.createElement("div");
        newElement.style.position = "fixed";
        newElement.style.zIndex = "2147483647";
        newElement.style.left = "20px";
        newElement.style.top = "100px";
        newElement.style.fontSize = "200px";
        var text = document.createTextNode("AWESOME");
        newElement.appendChild(text);
        document.body.appendChild(newElement);
    }
    fn3();
})();
