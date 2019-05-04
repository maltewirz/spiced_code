(function() {
    var headlines;
    var links;
    var leftVar;
    var animId;
    //
    $.ajax({
        url: "./data.json",
        success: function(data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html +=
                    '<a href ="' + data[i].href + '">' + data[i].text + "</a>";
            }
            $("#headlines").append(html);
            headlines = $("#headlines");
            links = $("a");
            leftVar = headlines.offset().left;
            animId;
            moveHeadlines();
        }
    });

    function moveHeadlines() {
        leftVar--;
        if (leftVar <= -links.eq(0).outerWidth()) {
            leftVar += links.eq(0).outerWidth();
            links.eq(0).remove();
            links.eq(0).appendTo(headlines);
            links = $("a");
        }
        $("#headlines").css({
            left: leftVar + "px"
        });
        animId = requestAnimationFrame(moveHeadlines);
    }

    $(links).on("mouseenter", function() {
        cancelAnimationFrame(animId);
    });
    $(links).on("mouseleave", function() {
        moveHeadlines();
    });
})();
