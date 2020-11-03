// console.log("testing");

// // console.log("sanity check");

var outerBox = document.getElementById("outerBox");
var innerBox = document.getElementById("innerBox");

// // random color
function getRandomColorNumber() {
    return Math.floor(Math.random() * 256);
}
function randomColor() {
    var r = getRandomColorNumber();
    var g = getRandomColorNumber();
    var b = getRandomColorNumber();
    return "rgb(" + r + "," + g + "," + b + ")";
}

outerBox.addEventListener("click", function () {
    outerBox.style.backgroundColor = randomColor();
});

innerBox.addEventListener("click", function (event) {
    event.stopPropagation();
    innerBox.style.backgroundColor = randomColor();
});


