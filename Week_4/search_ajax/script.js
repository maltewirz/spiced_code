(function() {
    var input = $("input");
    var results = $("#results");
    // var timer;

    // handling keypresses
    $(".search").on("keydown", function(event) {
        var active = $(".active");
        var results = $(".result");
        var index = active.index();
        if (event.keyCode === 40) {
            event.preventDefault();
            //down key
            if (active.length == 0) {
                results.eq(0).addClass("active");
            }
            if (index == results.length - 1) {
                return;
            } else {
                active.removeClass("active");
                results.eq(index + 1).addClass("active");
            }
        }
        if (event.keyCode === 38) {
            event.preventDefault();
            // "up" key
            if (active.length == 0) {
                results.eq(results.length - 1).addClass("active");
                return;
            }
            if (index == 0) {
                return;
            } else {
                active.removeClass("active");
                results.eq(index - 1).addClass("active");
            }
        } else if (event.keyCode == 13) {
            input.val($(".active").text());
            $(".result").remove();
            $("#results").removeClass("extended");
        }
    });

    // handling input events
    // setTimeout(function() {}, 2150);
    input.on("input", function() {
        var val = input.val();

        checker(val);
        function checker(val) {
            $.ajax({
                url: "https://flame-egg.glitch.me/",
                method: "GET",
                data: {
                    q: val
                },
                success: function(matches) {
                    //compare valResult with inputVal, if not the same, request outdated.
                    if (val != input.val()) {
                        return;
                    }
                    var resultsHtml = "";
                    // handling empty input
                    if (matches == "") {
                        $(".result").remove();
                        resultsHtml += '<div class="result">No result</div>';
                    }
                    for (var j = 0; j < matches.length; j++) {
                        resultsHtml +=
                            '<div class="result">' + matches[j] + "</div>";
                    }
                    //appending html
                    results
                        .html(resultsHtml)
                        .show()
                        .addClass("extended");
                }
            });
        }

        //------------------------------------------
        //mouseover events selecting result - step 2
        $(".result").on("mouseover", function(event) {
            $(".result").removeClass("active");
            $(event.target).addClass("active");
        });

        //mousedown - step 3
        $(".result").on("mousedown", function(event) {
            input.val($(event.target).text());
            $(".result").remove();
            $("#results").removeClass("extended");
        });

        // handling input blur + focus - deselecting
    });

    $("input").on("focus", function() {
        $(".result").show();
        $("#results").addClass("extended");
    });
    $("input").on("blur", function() {
        $(".result").hide();
        $("#results").removeClass("extended");
    });
})();
