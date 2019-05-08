console.log("sanity check");

var board = document.getElementById("board");
var racers = document.getElementsByClassName("racer");

var racingCarLeft = 0;
var motorBikeLeft = 0;
var policeCarLeft = 0;
var tractorLeft = 0;

function getRandomNumber() {
    return Math.floor(Math.random() * 21);
}

board.addEventListener("click", function() {
    racingCarLeft += getRandomNumber();
    motorBikeLeft += getRandomNumber();
    policeCarLeft += getRandomNumber();
    tractorLeft += getRandomNumber();
    console.log(racingCarLeft);
    racers[0].style.left = racingCarLeft + "px";
    racers[1].style.left = motorBikeLeft + "px";
    racers[2].style.left = policeCarLeft + "px";
    racers[3].style.left = tractorLeft + "px";
});

document.getElementById("boost-button").addEventListener("click", function(e) {
    e.stopPropagation();
    racingCarLeft += 100;
    racers[0].style.left = racingCarLeft + "px";
    console.log("clicked on button!");
});

document.addEventListener("keypress", function(arg) {
    console.log(arg);
    if (arg.keyCode === 82) {
        var randomColor =
            "rgb(" +
            getRandomNumber(256) +
            "," +
            getRandomNumber(256) +
            "," +
            getRandomNumber(256) +
            ")";
        console.log(randomColor());
        board.style.backgroundColor = randomColor;
    }
});
