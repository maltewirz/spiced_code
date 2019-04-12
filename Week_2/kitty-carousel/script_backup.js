(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var cur = 0;
    var timer;
    var transitioning;

    setTimeout(moveKitties, 1000);

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function(e) {
            console.log(e.target.id.replace("dot", ""));
            if (e.target.classList.contains("on")) {
                return;
            } else if (transitioning) {
                return;
            }
            clearTimeout(timer);
            moveKitties(i);
            transitioning = false;
        });
    }

    //Alternative Solution:
    // [].slice.call(dots).forEach(function(dot, i) {
    //     dots[i].addEventListener("click", function() {
    //         console.log(i);
    //     });
    // });

    function moveKitties(next) {
        console.log("The current one is " + cur);
        //removes onscreen class from the element that currently has it and adds exit class to the that same element.
        kitties[cur].classList.remove("onscreen");
        kitties[cur].classList.add("exit");
        dots[cur].classList.remove("on");
        // when transition to exit is done,remove exit class -> default
        kitties[cur].addEventListener("transitionend", function(e) {
            // console.log("transitionend");
            if (e.target.classList.contains("exit")) {
                e.target.classList.remove("exit");
                timer = setTimeout(moveKitties, 2000);
            }
        });
        //cur counter goes up, until end of length, then reset to 0
        transitioning = true;
        cur++;
        if (cur >= kitties.length) {
            cur = 0;
        }
        if (typeof next != "undefined") {
            cur = next;
        }
        //Adds onscreen class to the next kitty element.
        console.log("The next one is " + cur);
        kitties[cur].classList.add("onscreen");
        dots[cur].classList.add("on");
        setTimeout(moveKitties, 2000);
    }
})();

// (function() {
//     var kitties = document.getElementsByClassName("kitty");
//     var dots = document.getElementsByClassName("dot");
//     var cur = 0;
//
//     setTimeout(moveKitties, 1000);
//
//     function moveKitties() {
//         console.log("The current one is " + cur);
//         //removes onscreen class from the element that currently has it and adds exit class to the that same element.
//         kitties[cur].classList.remove("onscreen");
//         kitties[cur].classList.add("exit");
//         dots[cur].classList.remove("on");
//         // when transition to exit is done,remove exit class -> default
//         kitties[cur].addEventListener("transitionend", function(e) {
//             // console.log("transitionend");
//             if (e.target.classList.contains("exit")) {
//                 e.target.classList.remove("exit");
//             }
//         });
//         //cur counter goes up, until end of length, then reset to 0
//         cur++;
//         if (cur >= kitties.length) {
//             cur = 0;
//         }
//         //Adds onscreen class to the next kitty element.
//         console.log("The next one is " + cur);
//         kitties[cur].classList.add("onscreen");
//         dots[cur].classList.add("on");
//         setTimeout(moveKitties, 2000);
//     }
// })();
