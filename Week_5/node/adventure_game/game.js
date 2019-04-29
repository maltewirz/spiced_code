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

const story = {
    q: "Would you like to play a game so retro it will hurt your eyes?",
    answers: {
        yes: {
            q:
                "Start. You are racing in your car, a red light comes up. Will you brake?",
            answers: {
                no: {
                    q:
                        "You won the race. It was your 9th victory. How many more do you need to have 10 victories?",
                    answers: {
                        "1":
                            "congratulations, you won the race and showed your math skills!"
                    }
                },
                yes: "You brake you loose!"
            }
        },
        no: "Remember, the most powerful graphics chip is your brain!"
    }
};

// const story = {
//     q: "Welcome to The Land Of Wizards! Would you like to play?",
//     answers: {
//         yes: {
//             q:
//                 "You are alone in a dark forest and facing a fork in the road. Which direction do you turn?",
//             answers: {
//                 left: {
//                     q:
//                         "There's a scary wizard! He asks you a tough question. What's 1+1?",
//                     answers: {
//                         "2": "congratulations!"
//                     }
//                 },
//                 right: "This was not the right choice. Goodbye!"
//             }
//         },
//         no: "Alright then. Enjoy your day!"
//     }
// };
ask(story);
