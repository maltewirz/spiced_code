(function() {
    // var headlines = document.getElementById("headlines");
    var headlines = $("#headlines");
    // var links = headlines.getElementsByTagName("A");
    var links = $("a");
    // var left = headlines.offsetLeft;
    var leftVar = headlines.offset().left;
    var animId;

    moveHeadlines();
    function moveHeadlines() {
        leftVar--;
        if (leftVar <= -links.eq(0).outerWidth()) {
            leftVar += links.eq(0).outerWidth();
            // var first = headlines.removeChild(links[0]);
            // headlines.appendChild(first);
            // var first = headlines.removeChild(links.eq(0));
            links.eq(0).remove();
            links.eq(0).appendTo(headlines);
            links = $("a");
        }
        // headlines.style.left = leftVar + "px";
        $("#headlines").css({
            left: leftVar + "px"
        });
        animId = requestAnimationFrame(moveHeadlines);
    }

    // for (var i = 0; i < links.length; i++) {
    //     links[i].addEventListener("mouseenter", function() {
    //         cancelAnimationFrame(animId);
    //     });
    // }
    $(links).on("mouseenter", function() {
        cancelAnimationFrame(animId);
    });

    // for (var j = 0; j < links.length; j++) {
    //     links[j].addEventListener("mouseleave", function() {
    //         moveHeadlines();
    //
    //     });
    // }
    $(links).on("mouseleave", function() {
        moveHeadlines();
    });
})();
