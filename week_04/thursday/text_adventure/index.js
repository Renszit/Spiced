const readline = require("readline");
//core module of node
const chalk = require("chalk");
// this is an npm package we installed (colors)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const story = {
    q: `It is the first day of the year 2021, you wake up after a long slumber with a hangover.
Around you is no one. 
"ah right.. Covid". 
There are stale chips on the table. 
"hm" you think "I ám hungry..." 
what do you do? (eat/throw) `,
    answers: {
        eat: {
            q:
            `
Uhm. Gross. You actually eat the chips. 
They have been there since last year at least!
Hm. Anyway, now that we have established what you are willing to do for this text adventure.. 
The house is a real mess. You should do some cleaning. (clean/leave) `,
            answers: {
                clean: {
                    q:
                        `
You start cleaning the house, which is really disgusting. 
What did you do last night? I know it has been a rough year but c'mon, 20(!) whiskey bottles?.
This is not the way you should live your life.
Sorry. I should not judge you, I am just a computer.
You find one whiskey bottle which has not been finished. (drink/toss away)`,
                    answers: {
                        drink: "congratulations! You just started 2021 with a bang!",
                    },
                },
                leave: `Or you should leave I guess? 
If you are not going to take my suggestions I think it's better if we end this here. 
Don't say you like text based stories and then just leave when you are able. 
sigh.`,
            },
        },
        throw: `For some reason you throw the chips against the wall.. have fun cleaning up dummy`,
    },
};

function askQuestion(storyObj) {
    if (storyObj.q === undefined) {
        console.log(chalk.green(storyObj));
        rl.close();
    } else
        rl.question(chalk.inverse(storyObj.q), (answer) => {
            if (storyObj.answers[answer]) {
                askQuestion(storyObj.answers[answer]);
            } else {
                (console.log(chalk.red(
                    "ok.. not sure what you mean, let's try again."
                )));
                askQuestion(storyObj);
            }
        });
}

askQuestion(story);
