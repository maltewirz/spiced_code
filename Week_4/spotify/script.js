(function() {
    var nextUrl;
    var resultsHtml;
    var coverPic;

    var button = $(".submit-button");
    button.on("click", function() {
        resultsHtml = "";
        $(".result").remove();
        $(".search-notice").remove();
        var userInput = $("input[name='user-input']").val(); //target the name
        var dropdown = $(".artist-or-album").val();

        // second fetchAjax for more results
        function fetchAjaxTwo(urlInputTwo) {
            $.ajax({
                url: urlInputTwo,
                success: function(payload) {
                    payload = payload.artists || payload.albums;
                    for (var i = 0; i < payload.items.length; i++) {
                        if (typeof payload.items[i].images[1] == "undefined") {
                            coverPic = "/logo.png";
                        } else {
                            coverPic = payload.items[i].images[1].url;
                        }

                        resultsHtml +=
                            "<div class='result'>" +
                            "<img src=" +
                            coverPic +
                            ">" +
                            '<a href="' +
                            payload.items[i].external_urls.spotify +
                            '">' +
                            '<div class="text">' +
                            payload.items[i].name +
                            "</div></a></div>";
                    }
                    $(".results").append(resultsHtml);

                    nextUrl =
                        payload.next &&
                        payload.next.replace(
                            "https://api.spotify.com/v1/search",
                            "https://elegant-croissant.glitch.me/spotify"
                        );
                    if (nextUrl != null) {
                        $(".results")
                            .last()
                            .append("<div class='more'>More</div>");
                        $(".more").on("click", function() {
                            $(".more").remove();
                            fetchAjaxTwo(nextUrl);
                        });
                    }
                }
            });
        }
        // original ajax function
        fetchAjax(
            "https://elegant-croissant.glitch.me/spotify",
            userInput,
            dropdown
        );
        function fetchAjax(urlInput, userInput, dropdown) {
            $.ajax({
                url: urlInput,
                data: {
                    //represents input we get from the user#
                    query: userInput,
                    type: dropdown
                },
                //success is a function that runs once we heard a API response
                success: function(payload) {
                    //if lefthand side is defined -> && then do.
                    payload = payload.artists || payload.albums;
                    //Search head
                    $(".results").append(
                        "<div class='search-notice'>Results for " +
                            userInput +
                            "</div>"
                    );
                    for (var i = 0; i < payload.items.length; i++) {
                        if (typeof payload.items[i].images[1] == "undefined") {
                            coverPic = "/logo.png";
                        } else {
                            coverPic = payload.items[i].images[1].url;
                        }

                        resultsHtml +=
                            "<div class='result'>" +
                            "<img src=" +
                            coverPic +
                            ">" +
                            '<a href="' +
                            payload.items[i].external_urls.spotify +
                            '">' +
                            '<div class="text">' +
                            payload.items[i].name +
                            "</div></a></div>";
                    }
                    $(".results").append(resultsHtml);

                    nextUrl =
                        payload.next &&
                        payload.next.replace(
                            "https://api.spotify.com/v1/search",
                            "https://elegant-croissant.glitch.me/spotify"
                        );
                    if (nextUrl != null) {
                        $(".results")
                            .last()
                            .append("<div class='more'>More</div>");
                        $(".more").on("click", function() {
                            $(".more").remove();
                            fetchAjaxTwo(nextUrl);
                        });
                    }
                },
                error: function() {
                    $(".results").html("<div>No results</div>");
                }
            });
        }
    });
})();
