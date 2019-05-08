const events = require("events");

function Countdown(num) {
    const tick = num => {
        // console.log(num);
        if (num >= 0) {
            setTimeout(() => {
                this.emit("secondElapsed", num);
                tick(num - 1);
            }, 1000);
        }
    };
    tick(num);
}

Countdown.prototype = new events.EventEmitter();
Countdown.prototype.constructor = Countdown;

exports.Countdown = Countdown;
