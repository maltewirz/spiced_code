(function() {
    var headlines = document.getElementById("headlines"); // select div headlines
    var links = headlines.getElementsByTagName("A"); // selects links, array-like
    var left = headlines.offsetLeft; //  number pixels from upper left corner to the left
    var animId; //the animation counter to stop and resume.
    moveHeadlines();
    function moveHeadlines() {
        //counting down left, but not moving
        left--;
        //if first link is far to left, remove and append
        if (left <= -links[0].offsetWidth) {
            left = 0;
            var first = headlines.removeChild(links[0]);
            headlines.appendChild(first);
        }
        headlines.style.left = left + "px";
        // this starts the animation and assigns progress to animID
        animId = requestAnimationFrame(moveHeadlines);
    }

    //this stops the headlines scroll while mouseenter true
    for (var i = 0; i < links.length; i++) {
        //loops over the links so that i can recognize which one is selected
        links[i].addEventListener("mouseenter", function() {
            cancelAnimationFrame(animId);
        });
    }

    // this starts the headlines scroll when mouseenter false
    for (var j = 0; j < links.length; j++) {
        links[j].addEventListener("mouseleave", function() {
            moveHeadlines();
        });
    }
    // ------------------------------------------------------------
    // Bottom Counter
    var headlinesB = document.getElementById("headsB"); // select div headlines
    var linksB = headlinesB.getElementsByTagName("A"); // selects links, array-like
    var right = headlinesB.offsetLeft + headlinesB.offsetWidth;
    var animIdTwo; //the animation counter to stop and resume.
    moveHeadlinesB();

    function moveHeadlinesB() {
        right--;
        if (right <= -linksB[linksB.length - 1].offsetWidth) {
            right += linksB[linksB.length - 1].offsetWidth;
            headlinesB.insertBefore(
                headlinesB.removeChild(linksB[linksB.length - 1]),
                linksB[0]
            );
        }

        headlinesB.style.right = right + "px";
        animIdTwo = requestAnimationFrame(moveHeadlinesB);
    }

    for (var k = 0; k < linksB.length; k++) {
        linksB[k].addEventListener("mouseenter", function() {
            cancelAnimationFrame(animIdTwo);
        });
        linksB[k].addEventListener("mouseleave", function() {
            moveHeadlinesB();
        });
    }
})();
