const readline = require("readline");
//core module of node
const chalk = require("chalk");
// this is an npm package we installed (colors)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play?(yes/no)",
    answers: {
        yes: {
            q:
                "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? (left/right)",
            answers: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

function askQuestion(storyObj) {
    if (storyObj.q === undefined) {
        console.log(storyObj);
        rl.close();
    } else
        rl.question(chalk.inverse(storyObj.q), (answer) => {
            if (storyObj.answers[answer]) {
                askQuestion(storyObj.answers[answer]);
            } else {
                console.log(
                    "ok.. not sure what you are saying here, let's try again."
                );
                askQuestion(storyObj);
            }
        });
}

askQuestion(story);
