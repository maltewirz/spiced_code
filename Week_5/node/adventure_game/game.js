const readline = require("readline");
const chalk = require("chalk");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(obj) {
    rl.question(chalk.red(obj.q), function(answer) {
        if (obj.answers[answer]) {
            // is answer an object(ask) or string(end)
            if (typeof obj.answers[answer] == "object") {
                ask(obj.answers[answer]);
            } else if (typeof obj.answers[answer] == "string") {
                console.log(obj.answers[answer]);
                return;
            }
        } else {
            //if answer is not valid, try again
            console.log("try again");
            ask(obj);
        }
    });
}

module.exports.ask = ask;
