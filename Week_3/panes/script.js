(function() {
    console.log("sanity");

    var container = $(".container");
    var bar = $(".bar");
    var barmiddle = bar.width();
    //to add: stopping bar at the sides.

    bar.on("mousedown", function() {
        container.on("mousemove", function(e) {
            e.preventDefault();
            $("#top").css({
                width: e.pageX
            });
            $(".bar").css({
                left: e.pageX - barmiddle
            });
        });
    });

    $(document).on("mouseup", function() {
        container.off("mousemove");
    });
})();
