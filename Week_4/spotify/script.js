(function() {
    var nextUrl;
    var resultsHtml = "";
    var coverPic;

    var button = $(".submit-button");
    button.on("click", function() {
        var userInput = $("input[name='user-input']").val(); //target the name
        var dropdown = $(".artist-or-album").val();

        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                //represents input we get from the user#
                query: userInput,
                type: dropdown
            },
            //success is a function that runs once we heard a API response
            success: function(payload) {
                //if lefthand side is defined -> && then do.
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
                    $(".results").html(resultsHtml);
                }

                ///////-----------------------------
                //more stuff for later
                // nextUrl =
                //     payload.next &&
                //     payload.next.replace(
                //         "https://api.spotify.com/v1/search",
                //         "https://elegant-croissant.glitch.me/spotify"
                //     );
                // console.log(nextUrl);
                // nextUrl to make the second ajax request thorugh "more"button
                //wrap ajax request in function for reusing. in the second ajax, not data is needed.
                ///////-----------------------------
            }
        });
    });
})();

// external url
// name
// images
//loop through items, take every name, image, url and render it on screen.
//inside images, we have take just the first array,
