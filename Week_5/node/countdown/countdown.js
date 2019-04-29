const events = require("events");

function Countdown(num) {
    let i;
    if (i > 0) {
        setTimeout(function() {
            console.log(i);
            i--;
        }, 1000);
        // Countdown.emit("secondElapsed", "awesome");
    }
}

Countdown.prototype = new events.EventEmitter();
module.exports.Countdown = Countdown;
