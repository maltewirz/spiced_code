// localStorage.setItem("name", "Ryan");
// var value = localStorage.getItem("name");
// console.log(value);

(function() {
    var textarea = $("textarea");

    try {
        textarea.val(localStorage.getItem("userInput"));
    } catch (e) {
        console.log(e);
    }

    textarea.on("input", function() {
        var val = textarea.val();
        try {
            localStorage.setItem("userInput", val);
        } catch (e) {
            console.log(e);
        }
    });
})();
