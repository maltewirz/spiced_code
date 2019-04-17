// localStorage.setItem("name", "Ryan");
// var value = localStorage.getItem("name");
// console.log(value);

(function() {
    var textarea = $('textarea');

    textarea.val(localStorage.getItem('userInput'));

    textarea.on("input", function() {
        var val = textarea.val();
        localStorage.setItem("userInput", val);
    });
})();
