(function() {
    console.log("sanity");

    var container = $(".container");
    var bar = $(".bar");

    bar.on("mousedown", function() {
        container.on("mousemove", function(e) {
            $("#top").css({
                width: e.pageX
            });
            $(".bar").css({
                left: e.pageX
            });
        });
    });
})();
