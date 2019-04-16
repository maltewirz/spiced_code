(function(countries) {
    var input = $("input");
    var results = $("#results");

    input.on("input", function() {
        var val = input.val();
        var matches = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                //adding matches to array
                matches.push(countries[i]);
                //limiting matches
                if (matches.length == 5) {
                    break;
                }
                //converting matches to html
                var resultsHtml = "";
                for (var j = 0; j < matches.length; j++) {
                    resultsHtml +=
                        '<div class="result">' + matches[j] + "</div>";
                }
                //appending html
                results
                    .html(resultsHtml)
                    .show()
                    .addClass("extended");

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
            }
        }
        // handling keypresses
        $(".search").on("keydown", function(event) {
            if (event.keyCode === 40) {
                var results = $(".result");
                if (
                    results[results.length - 1].classList.contains("active") ===
                    true
                ) {
                    return;
                }
                for (var i = 0; i < results.length - 1; i++) {
                    if (results[i].classList.contains("active")) {
                        results.removeClass("active");
                        results.eq(i + 1).addClass("active");
                        break;
                    } else {
                        results.eq(0).addClass("active");
                    }
                }
            } else if (event.keyCode === 38) {
                var active = $(".active");
                var resultsTwo = $(".result");

                if (active.length == 0) {
                    //add to last
                    resultsTwo.eq(resultsTwo.length - 1).addClass("active");
                    return;
                }

                var index = active.index();

                if (index == 0) {
                    return;
                } else {
                    active.removeClass("active");
                    resultsTwo.eq(index - 1).addClass("active");
                }
            } else if (event.keyCode == 13) {
                console.log("return pressed");
                input.val($(".active").text());
                $(".result").remove();
                $("#results").removeClass("extended");
            }
        });
        //handling empty input
        if (val == "") {
            $(".result").remove();
            results.html('<div class="result">' + "no results" + "</div>");
        }

        // handling input blur - deselecting
    });
    $("input").on("focus", function() {
        console.log("clicked");
        $(".result").show();
    });
    $("input").on("blur", function() {
        console.log("gone");
        $(".result").hide();
        $("#results").removeClass("extended");
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]);
