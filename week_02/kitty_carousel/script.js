(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var count = 0;
    var timer;
    var dots = document.querySelectorAll(".dot");
    var isTransitioning = false;

    // for (var i = 0; i < dots.length; i++) {
    //     (function (dotIndex) {
    //         dots[i].addEventListener("click", function (e) {
    //             if (isTransitioning) {
    //                 return;
    //             }
    //             // if (if the dot that was clicked corresponds with the kitty that's currently onscreen) {
    //             // do nothing
    //             // }
    //             console.log("dotIndex: ", dotIndex);
    //             clearTimeout(timer); // this will cancel a setTimout
    //             moveKitties(dotIndex);
    //         });
    //     })(i); // DONT FORGET TO INVOKE YOUR IIFE
    // }

    //moveKitties
    function moveKitties(index) {
        console.log("index:", index);
        if (typeof index === "number") {
            kitties[index].classList.add("onscreen");
            kitties[count].classList.remove("onscreen");
            return;
        } else {
            dots[count].classList.remove("on");
            kitties[count].classList.remove("onscreen");
            kitties[count].classList.add("offscreen-left");

            if (count < kitties.length - 1) {
                count++;
                kitties[count].classList.add("onscreen");
                dots[count].classList.add("on");
            } else {
                count = 0;
                kitties[count].classList.add("onscreen");
                dots[count].classList.add("on");
            }
        }
    }
    
    timer = setTimeout(moveKitties, 3000);

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.value == "offscreen-left") {
            e.target.classList.remove("offscreen-left");
            dots[count].classList.remove("on");
            timer = setTimeout(function () {
                moveKitties();
            }, 3000);
        }
    });
})();
