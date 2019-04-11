(function() {
    var kitties = document.getElementsByClassName("kitty");
    var cur = 0;

    setTimeout(moveKitties, 5000);

    function moveKitties() {
        console.log("The current one is " + cur);
        //removes onscreen class from the element that currently has it and adds exit class to the that same element.
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        //1. Adds onscreen class to the next kitty element.
        kitties[cur].classList.add("onscreen");

        // kitties[cur].addEventListener("transitionend", function(e) {
        //     if (e.target.classList.contains("exit")) {
        //         e.taget.classList.remove("exit");
        //         setTimeout(moveKitties, 2000);
        //     }
        // });

        // kitties[cur].addEventListener("transitionend", function(e) {
        //     if (e.target.classList.contains("exit")) {
        //         e.taget.classList.remove("exit");
        //         setTimeout(moveKitties, 2000);
        //     }
        // });
        //remove onscreen class from elelment that currently
        //add exit class to the one just lost

        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        // add onscreen class to the next one.
        console.log("The next one is " + cur);

        setTimeout(moveKitties, 2000);
    }
})();
