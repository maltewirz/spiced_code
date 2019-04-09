(function() {
    var headlines = document.getElementById("headlines"); // select div headlines
    var links = headlines.getElementsByTagName("A"); // selects links, array-like
    var left = headlines.offsetLeft; // returns the number of pixels that the upper left corner of the current element is offset to the left
    var animID; //the animation counter to stop and resume.

    function moveHeadlines() {
        left--; //it reduces left div, thereby pushing it out
        if (left <= -links[0].offsetWidth) {
            left = 0; //if left div far enough out: remove the first link and append it
            var first = headlines.removeChild(links[0]);
            headlines.appendChild(first);
        }
        headlines.style.left = left + "px";
        // requestAnimationFrame(moveHeadlines); //it stops when it is not running
        animID = requestAnimationFrame(moveHeadlines);
    }

    //this stops the headlines scroll while mouseenter true
    for (var i = 0; i < links.length; i++) {
        //loops over the links so that i can recognize which one is selected
        links[i].addEventListener("mouseenter", function() {
            cancelAnimationFrame(animID);
            var link = event.target; //specifies to which target this change shall be applied.
            link.style.color = "blue";
            link.style.textDecoration = "underline";
        });
    }

    // this starts the headlines scroll when mouseenter false
    for (var j = 0; j < links.length; j++) {
        links[j].addEventListener("mouseleave", function() {
            headlines.style.textDecoration = "none";
            var linkTwo = event.target;
            linkTwo.style.color = "black";
            linkTwo.style.textDecoration = "none";
            moveHeadlines();
        });
    }

    moveHeadlines();
})();
