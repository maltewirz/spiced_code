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

    Handlebars.registerHelper("limit", function(arr, limit) {
        if (!Array.isArray(arr)) {
            return [];
        }
        return arr.slice(0, limit);
    });

    $(".submit-button").on("click", function() {
        var username = $('input[name="username"]').val();
        var password = $('input[name="password"]').val();
        var userToSearch = $('input[name="user-to-search"]').val();

        var rootUrl = "https://api.github.com";
        var endpoint = "/users/" + userToSearch + "/repos";

        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(payload) {
                $(".container").append(
                    Handlebars.templates.queryOne({ payload: payload })
                );
                $(".results-wrapper").on("click", function(e) {
                    console.log("click");
                    //this selects the current target object, extracts the children with div.text and then shows the actual text content.
                    var commits = $(e.currentTarget)
                        .children()
                        .children("div.text")
                        .text();
                    var endpointTwo = "/repos/" + commits + "/commits";
                    $.ajax({
                        url: rootUrl + endpointTwo,
                        headers: {
                            authorization:
                                "Basic " + btoa(username + ":" + password)
                        },
                        success: function(payload) {
                            $(e.currentTarget).append(
                                Handlebars.templates.queryTwo({
                                    payload: payload
                                })
                            );
                        }
                    });
                });
            }
        });
    });
})();
