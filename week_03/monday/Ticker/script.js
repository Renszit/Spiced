(function () {
    // var req = requestAnimationFrame(moveBox);
    var tckr = document.getElementById("ticker");
    //change
    var lft = tckr.offsetLeft;
    //change
    var lnks = document.getElementsByTagName("a");
    //change
    var anim;

    tckr.addEventListener("mouseenter", function () {
        cancelAnimationFrame(anim);
    });
    //change

    tckr.addEventListener("mouseleave", function () {
        requestAnimationFrame(moveBox);
    });
    //change

    function moveBox() {
        if (lft <= -1 * lnks[0].offsetWidth) {
            lft += lnks[0].offsetWidth;
            tckr.appendChild(lnks[0]);
            //change
        }
        lft--;
        tckr.style.left = lft + "px";
        lnks[0].offsetWidth;
        anim = requestAnimationFrame(moveBox);
        //change
    }

    moveBox();
})();


