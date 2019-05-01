(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ////////////////////////////////////////////////////////////////////////////
    // Do not touch
    ////////////////////////////////////////////////////////////////////////////
    var nextUrl;
    var resultsHtml;

    var button = $(".submit-button");
    button.on("click", function() {
        resultsHtml = "";
        $(".result").remove();
        $(".search-notice").remove();
        $(".more").remove();
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
                    console.log(payload);
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
                if (location.search.slice(1) == "scroll-infinite") {
                    checkScroll();
                    function checkScroll() {
                        if (
                            $(document).height() -
                                100 -
                                ($(document).scrollTop() +
                                    $(window).height()) <=
                            0
                        ) {
                            $(".more").remove();
                            fetchAjaxTwo(nextUrl);
                        } else {
                            setTimeout(checkScroll, 500);
                        }
                    }
                } else {
                    $(".results")
                        .last()
                        .append("<div class='more'>More</div>");
                    $(".more").on("click", function() {
                        $(".more").remove();
                        fetchAjaxTwo(nextUrl);
                    });
                }
            }
        }
    });

    function getHtml(data) {
        $(".results").append(
            Handlebars.templates.coverPic({
                items: data.items.map(function(item) {
                    var image = "/logo.png";
                    if (item.images[1]) {
                        image = item.images[1].url;
                    }
                    return {
                        href: item.external_urls.spotify,
                        name: item.name,
                        image: image
                    };
                })
            })
        );
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
