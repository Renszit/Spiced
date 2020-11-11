var germans = [
    "Eins",
    "Zwei",
    "Drei",
    "Vier",
    "Fünf",
    "Sechs",
    "Sieben",
    "Acht",
    "Neun",
    "Zehn",
];

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

function translateNumberToGerman() {
    try {
        var number = askForNumber();
        console.log((number = germans[number - 1]));
    } catch (error) {
        console.log(("Only enter a number between 1 and 10!"));
    }
    translateNumberToGerman();
}

translateNumberToGerman();


