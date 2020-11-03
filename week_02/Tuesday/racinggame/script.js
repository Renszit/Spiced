//console.log("sanity check");

var board = document.getElementById("board");
var racers = document.getElementsByClassName("racer");
var boostBtn = document.getElementById("boost-button");

//Don't repeat yourself // non-DRY manner = do repeat //yourself

var leftRacingCar = 0;
var leftMotorbike = 0;
var leftPoliceCar = 0;
var leftTractor = 0;

//math object // Math.random will return a random btwn 0-1
// math.random() * 51 will return a number btwn 0-50.9999
// math.floor (38.992929) will return 38.
// dus math.floor is afronden naar beneden

function getRandomNumber() {
    return Math.floor(Math.random() * 51);
}

function getRandomColorNumber() {
    return Math.floor(Math.random() * 256);
}

document.addEventListener("keydown", function (evt) {
    // console.log(evt);
    if (evt.keyCode === 32) {
        var r = getRandomColorNumber();
        var g = getRandomColorNumber();
        var b = getRandomColorNumber();
        var randomColour = "rgb(" + r + "," + g + "," + b + ")";
        // console.log(randomColour);
        board.style.backgroundColor = randomColour;
    }
});
// useful for excercises today
boostBtn.addEventlistener("click", function (event) {
    event.stopPropagation();
    // stops bubbling-up
    leftRacingCar += 100;
    racers[0].style.left = leftRacingCar + "px";
});

//bubbling: will check all eventlisteners all the way up to //document

board.addEventListener("click", function () {
    //console.log("clicked on the board!!");
    //always sanity check!!
    leftRacingCar += getRandomNumber();
    //console.log(leftRacingCar);
    //another sanity check
    leftMotorbike += getRandomNumber();
    leftPoliceCar += getRandomNumber();
    leftTractor += getRandomNumber();

    racers[0].style.left = leftRacingCar + "px";
    racers[1].style.left = leftMotorbike + "px";
    racers[2].style.left = leftPoliceCar + "px";
    racers[3].style.left = leftTractor + "px";
    // overflow-x could be added to not let them keep going
});

//console.log(board);
// console.log(racers);
