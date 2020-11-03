// console.log("sanity check");

var boxy = document.getElementById("box");

// random color

function getRandomColorNumber() {
    return Math.floor(Math.random() * 256);
}
function randomColor() {
    var r = getRandomColorNumber();
    var g = getRandomColorNumber();
    var b = getRandomColorNumber();

    return "rgb(" + r + "," + g + "," + b + ")";
}

boxy.addEventListener("mousedown", function () {
    boxy.style.backgroundColor = randomColor();
});

boxy.addEventListener("mouseup", function () {
    boxy.style.backgroundColor = randomColor();
});



