// Write a constructor called Countdown that accepts a single argument - the number of seconds to count down. It should be possible to call the start method of instances of Countdown to initiate the countdown. Once the countdown starts, it should count down to zero starting with the number that was passed to the constructor and logging each number to the console with a one second delay.

function Countdown(n) {
    this.start = function() {
        tick(n);
    };
    function tick(n) {
        console.log(n);
        if (n > 0) {
            setTimeout(function() {
                tick(n - 1);
            }, 1000);
        }
    }
}

var counter = new Countdown(5);
