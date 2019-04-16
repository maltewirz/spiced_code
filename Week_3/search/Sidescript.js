var results = $("#results");

results.show();
var resultHtml = "";

for (var i = 0; i < matches.length; i++) {
    resultsHtml += 'div class="result">' + matches[i] + "</div>";
}

results.html(resultsHtml); // you can also add the .show here
