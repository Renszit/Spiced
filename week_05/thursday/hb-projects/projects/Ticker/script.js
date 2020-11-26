(function () {
    // var req = requestAnimationFrame(moveBox);
    var tckr = document.getElementById("ticker");
    var lft = tckr.offsetLeft;
    var lnks = document.getElementsByTagName("a");
    var anim;

    tckr.addEventListener("mouseenter", function () {
        cancelAnimationFrame(anim);
    });

    tckr.addEventListener("mouseleave", function () {
        requestAnimationFrame(moveBox);
    });

    function moveBox() {
        if (lft <= -1 * lnks[0].offsetWidth) {
            lft += lnks[0].offsetWidth;
            tckr.appendChild(lnks[0]);
        }
        lft--;
        tckr.style.left = lft + "px";
        lnks[0].offsetWidth;
        anim = requestAnimationFrame(moveBox);
    }

    moveBox();
})();


