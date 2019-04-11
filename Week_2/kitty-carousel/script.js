(function() {
    var kitties = document.getElementsByClassName("kitty");
    var cur = 0;

    setTimeout(moveKitties, 1000);

    function moveKitties() {
        console.log("The current one is " + cur);
        //removes onscreen class from the element that currently has it and adds exit class to the that same element.
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        // when transition to exit is done,remove exit class -> default
        kitties[cur].addEventListener("transitionend", function(e) {
            // console.log("transitionend");
            if (e.target.classList.contains("exit")) {
                e.target.classList.remove("exit");
            }
        });
        //cur counter goes up, until end of length, then reset to 0
        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        //Adds onscreen class to the next kitty element.
        console.log("The next one is " + cur);
        kitties[cur].classList.add("onscreen");
        setTimeout(moveKitties, 2000);
    }
})();
