(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var cur = 0;
    var transitioning;

    //click listener to dots
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function(e) {
            console.log(e.target.id.replace("dot", "you clicked "));
            if (e.target.classList.contains("on")) {
                console.log("you are already watching me");
                return;
            } else if (transitioning) {
                console.log("currently transitioning");
                return;
            } else {
                console.log("ok let me switch the pic!" + e);
                kitties[cur].classList.remove("onscreen");
                kitties[cur].classList.add("exit");
                kitties[e.target.id.replace("dot", "")].classList.add(
                    "onscreen"
                );
            }
            // transitioning = false;
        });
    }

    // when transition to exit is done,remove exit class -> default
    document.addEventListener("transitionend", function(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
        }
    });

    setTimeout(moveKitties, 1000);

    function moveKitties() {
        //removes onscreen class and adds exit class of current element
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        //removes dot
        dots[cur].classList.remove("on");

        //cur counter goes up
        // transitioning = true;
        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        //Adds onscreen class to the next kitty element.
        kitties[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
        setTimeout(moveKitties, 2000);
    }
})();

//Step 1: Listen to clicks - ok
//Step 2: Action according to click:
// 2.1 jump to repecttive pic -ok
// 2.2 wait for animation to finish until pic is jumped.
