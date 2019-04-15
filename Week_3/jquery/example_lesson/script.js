(function() {
    //tag, class , id, selector
    $("div").css({
        background: "black",
        border: "5px solid yellow",
        margin: "100px"
    });
    // creating new Dom nodes and appending them to DOM
    $("<h1>jquery is fuuuun</h1>")
        .css({
            color: "red",
            "font-family": "Helvetica Neue",
            "font-size": "100px"
        })
        .appendTo("body");
    // create new DOm node and then style in class
    // whatever class we pass to add class must exist in your CSS file
    $("<h1>jquery <333333></h1>")
        .addClass("header")
        .appendTo("body");

    $("h1").html("something else");
    // we talked about .css, .appendTo, .html, .addClass,

    //events in jquery "addEventlistener" become "on"
    // e.target returns a DOM node, not a jquery object
    // jquery methods can only be applied to jquery objects
    // e.g. .css, appendTo, addClass, .html, .on
    $(".sky").on("click", function(e) {
        console.log("sky clicked!!!");
        console.log("event target: ", e.target);
        $(".sky").css({
            background: "tomato"
        });
    });

    // we wrap e.target in the §()
    // just to convert it to a jquery object
    $(e.target).css({
        background: "white"
    });

    //
    var leftVar = 50;
    $(".sky").on("click", function(){
        console.log("clicked");
        leftVar += 10;
        $(".player").css({
            left: leftVar + "px"
        });
    });


    //
    $(document).on('keydown', function(e) {
        if (e.which === 39) {
            leftVar += 10;
            $('.player').css({
                left: leftVar
            });
        }
    });

})();
