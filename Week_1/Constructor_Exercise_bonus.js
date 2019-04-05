function Countdown(s) {
    this.start = function() {
        for (var i = s; i > 0; i--) {
            setTimeout(console.log(i), 1000);
        }
    };
}

var countdown = new Countdown(5);

console.log(countdown);

countdown.start();

// // conceptual loop: Hint from David
// function fn()
//     console.log(Date.now();
//     set setTimeout(fn, 1000);
// }
//
// fn();

//
//
// function Countdown {
//     start: function(s) {
//         for (var i = s; i > 0; i--) {
//             setTimeout(console.log(i), 1000);
//         }
//     }
// }
//
// var countdown = new Countdown(5);
//
// countdown.start();
//
