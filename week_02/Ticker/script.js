(function () {
    var tckr = document.getElementById("ticker");
    var lft = tckr.offsetLeft;
    var lnks = document.getElementsByTagName("a");

    function moveBox() {
        if (lft <= -1 * lnks[0].offsetWidth) {
            lft += lnks[0].offsetWidth;
            tckr.appendChild(lnks[0]);
        }
        lft--;
        tckr.style.left = lft + "px";
        lnks[0].offsetWidth;
        requestAnimationFrame(moveBox);
    }

    moveBox();
})();
