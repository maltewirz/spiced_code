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
                    Handlebars.templates.queryA({ payload: payload })
                );
            }
        });
    });
})();
