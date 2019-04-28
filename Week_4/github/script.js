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
        $(".repo-wrapper").remove();
        let username = $('input[name="username"]').val();
        let password = $('input[name="password"]').val();
        let userToSearch = $('input[name="user-to-search"]').val();

        let rootUrl = "https://api.github.com";
        let endpoint = "/users/" + userToSearch + "/repos";

        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(payload) {
                $(".container").append(
                    Handlebars.templates.queryOne({ payload: payload })
                );
                $(".repo-wrapper").on("click", function(e) {
                    //this selects the current target object, extracts the children with div.text and then shows the actual text content.
                    let commits = $(e.currentTarget)
                        .children()
                        .children("div.text")
                        .text();

                    let commitBox = $(e.currentTarget).hasClass("ajaxAdd");
                    let curWrap = $(e.currentTarget).find(".commits-wrapper");

                    //checks if commits are already fetched for currentTarget
                    //else start the ajax query.
                    if (commitBox) {
                        if (curWrap.hasClass("on")) {
                            curWrap.removeClass("on");
                            curWrap.hide();
                        } else {
                            curWrap.addClass("on");
                            curWrap.show();
                        }
                    } else {
                        var endpointTwo = "/repos/" + commits + "/commits";
                        $.ajax({
                            url: rootUrl + endpointTwo,
                            headers: {
                                authorization:
                                    "Basic " + btoa(username + ":" + password)
                            },
                            success: function(payload) {
                                $(e.currentTarget).addClass("ajaxAdd");
                                $(e.currentTarget).append(
                                    Handlebars.templates.queryTwo({
                                        payload: payload
                                    })
                                );
                            }
                        });
                    }
                });
            }
        });
    });
})();
