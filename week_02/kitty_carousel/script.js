(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var dots = document.querySelectorAll(".dot");
    var timer;
    var isTransitioning = false;

    //dot index
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            for (var j = 0; j < dots.length; j++) {
                if (dots[j] === e.target) {
                    console.log("dot index: ", j);
                }
            }
        });
    }

    //moveKitties function needs work
    function moveKitties() {
        kitties[0].classList.add("offscreen-left");
        kitties[0].classList.remove("onscreen");
        kitties[1].classList.add("onscreen");

        setTimeout(moveKitties, 3000);
        // move dots inside function
    }

    //initial function call

    //checking if transition has stopped and calling moveKitties again
    for (var k = 0; k < kitties.length; k++) {
        kitties[k].addEventListener("transitionend", function (e) {
            for (var j = 0; j < kitties.length; j++) {
                if (e.target.classList.value == "offscreen-left") {
                    kitties[j].classList.remove("offscreen-left");
                } 
            }
            setTimeout(moveKitties, 3000);
        });
    }
})();


