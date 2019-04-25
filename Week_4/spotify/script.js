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
                    getHtml(payload);
                    $(".results").append(resultsHtml);
                    setNextUrl(payload);
                    nextUrlFunction(nextUrl);
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
                    query: userInput,
                    type: dropdown
                },
                success: function(payload) {
                    payload = payload.artists || payload.albums;
                    $(".results").append(
                        "<div class='search-notice'>Results for " +
                            userInput +
                            "</div>"
                    );
                    getHtml(payload);
                    $(".results").append(resultsHtml);
                    setNextUrl(payload);
                    nextUrlFunction(nextUrl);
                },
                error: function() {
                    $(".results").html("<div>No results</div>");
                }
            });
        }
        function nextUrlFunction(data) {
            if (data != null) {
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

    function getHtml(data) {
        for (var i = 0; i < data.items.length; i++) {
            if (typeof data.items[i].images[1] == "undefined") {
                coverPic = "/logo.png";
            } else {
                coverPic = data.items[i].images[1].url;
            }

            resultsHtml +=
                "<div class='result'>" +
                "<img src=" +
                coverPic +
                ">" +
                '<a href="' +
                data.items[i].external_urls.spotify +
                '">' +
                '<div class="text">' +
                data.items[i].name +
                "</div></a></div>";
        }
    }

    function setNextUrl(data) {
        nextUrl =
            data.next &&
            data.next.replace(
                "https://api.spotify.com/v1/search",
                "https://elegant-croissant.glitch.me/spotify"
            );
    }
})();
