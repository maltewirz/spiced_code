(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var cur = 0;
    var timer;
    var transitioning;

    setTimeout(moveKitties, 2000);

    //click listener to dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function(e) {
            console.log(transitioning);
            console.log(e.target.id.replace("dot", "you clicked "));
            if (e.target.classList.contains("on")) {
                console.log("you are already watching me");
                return;
            } else if (transitioning) {
                console.log("currently transitioning");
                return;
            } else {
                console.log("ok let me switch the pic!" + e);
            }
            clearTimeout(timer);
            moveKitties(e.target.id.replace("dot", ""));
        });
    }

    // when transition to exit is done,remove exit class -> default
    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            transitioning = false;
        }
    });

    function moveKitties(next) {
        //removes onscreen class; adds exit class; adds dot
        kitties[cur].classList.remove("onscreen");
        dots[cur].classList.remove("on");
        kitties[cur].classList.add("exit");

        //cur counter goes up
        transitioning = true;
        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        if (typeof next != "undefined") {
            cur = next;
        }

        //Adds onscreen class to the next kitty element.
        kitties[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
        timer = setTimeout(moveKitties, 2000);
    }
})();
