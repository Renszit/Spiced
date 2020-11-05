(function () {
    var kitties = Array.from(document.querySelectorAll(".kitty-container img"));

    function moveKitties() {
        kitties[0].classList.add("offscreen-left");
        kitties[0].classList.remove("onscreen");
        kitties[1].classList.add("onscreen");
    }

    setTimeout(moveKitties, 3);

    document.addEventListener("transitionend", function (e) {
        if (e.target.classList.value == "offscreen-left") {
            kitties[0].classList.remove("offscreen-left");
            kitties[kitties.length] = kitties[0];
            kitties.shift();
            setTimeout(moveKitties, 3);
        }
    });
})();
