(function() {
    var result;
    askForNumber();
    function askForNumber() {
        var num = prompt('Please enter a number between 1 and 10');
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            translateNumberToGerman(num);
            return num;
        }
        console.log("error, this is not number");
        askForNumber();
    }

    function translateNumberToGerman(engNr) {
        var translations = ['', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
        result = translations[engNr];
        $(".results").html(result);
    }
})();
