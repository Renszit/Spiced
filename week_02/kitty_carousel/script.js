(function () {
    var kitties = document.querySelectorAll(".kitty-container img");
    var count = 0;
    var timer;

    function moveKitties(index) {
        console.log("index:", index);
        if (typeof index === "number") {
            kitties[index].classList.add("onscreen");
            kitties[count].classList.remove("onscreen");
            return;
        } else {
            kitties[count].classList.remove("onscreen");
            kitties[count].classList.add("offscreen-left");

            document.addEventListener("transitionend", function (e) {
                if (e.target.classList.value == "offscreen-left") {
                    e.target.classList.remove("offscreen-left");
                    timer = setTimeout(function () {
                        moveKitties();
                    }, 3000);
                }
            });

            if (count < kitties.length - 1) {
                count++;
                kitties[count].classList.add("onscreen");
            } else {
                count = 0;
                kitties[count].classList.add("onscreen");
            }
        }
    }
    setTimeout(function () {moveKitties();},3000);
})();
