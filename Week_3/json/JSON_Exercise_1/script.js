(function() {
    var input = $("input");
    var button =  $("button");


    //input function
    input.on("input", function() {
        var val = input.val();
        return val;
    });

    //button action
    button.on("mousedown", function(){
        var finalVal = input.val();
        var result ="";

        try {
            // input invalid JSON
            JSON.parse(finalVal);
            //input valid JSON
            result += "This is a valid JSON: ";
            result += finalVal;

        } catch (error) {
            result += "Not a JSON. Details: " + error;
        }
        console.log(result);
        $(".results").html(result);


    });
})();
