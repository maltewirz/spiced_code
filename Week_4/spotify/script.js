(function() {
    var nextUrl;

    var button = $(".submit-button");
    button.on("click", function() {
        var userInput = $("input[name='user-input']").val(); //target the name
        var dropdown = $(".artist-or-album").val();
        //we have to send proxy 3 pieces of info
        // 1. url -- just defines what website we're mkaing a request to.
        // 2. user input -- the text that the user put in the input field.
        // 3. dropdown -- the user's choice from the dropwdown menu.
        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                //represents input did we get from the user#
                query: userInput,
                type: dropdown
            },
            //success is a function that runs once we heard a API response
            success: function(payload) {
                payload = payload.artists || payload.albums;
                //if lefthand side is defined -> && then do.
                nextUrl =
                    payload.next &&
                    payload.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://elegant-croissant.glitch.me/spotify"
                    );
                console.log(nextUrl);
                // nextUrl to make the second ajax request thorugh "more"button
                //wrap ajax request in function for reusing. in the second ajax, not data is needed.
            }
        });
    });
})();

// external url
// name
// images
//loop through items, take every name, image, url and render it on screen.
//inside images, we have take just the first array,
