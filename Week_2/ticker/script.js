(function() {
    var headlines = document.getElementById("headlines"); // select div headlines
    var links = headlines.getElementsByTagName("A"); // selects links, array-like
    var left = headlines.offsetLeft; // returns the number of pixels that the upper left corner of the current element is offset to the left

    function moveHeadlines() {
        left--; //it reduces left div, thereby pushing it out
        if (left <= -links[0].offsetWidth) {
            left = 0; //if left div far enough out: remove the first link and append it
            var first = headlines.removeChild(links[0]);
            left += first.length;
            headlines.appendChild(first);
        }
        // console.log(left);
        headlines.style.left = left + "px";
        requestAnimationFrame(moveHeadlines); //it stops when it is not running
    }
    moveHeadlines();
})();
