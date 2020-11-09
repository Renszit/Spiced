(function () {
    // var req = requestAnimationFrame(moveBox);
    var tckr = $("#ticker");
    var lnks = $("a");
    var lft = tckr.offset().left;
    var anim;

    tckr.on("mouseenter", function (e) {
        console.log("mouseenter:", e);
        cancelAnimationFrame(anim);
    });

    tckr.on("mouseleave", function (e) {
        console.log("mouseleave:", e);
        requestAnimationFrame(moveBox);
    });

    function moveBox() {
        if (lft <= -1 * lnks.eq(0).offsetWidth) {
            lft += lnks.eq(0).offsetWidth;
            tckr.append(lnks.eq(0));
        }
        lft--;
        tckr.css({
            left: lft + "px",
        });
        lnks.eq(0).offsetWidth;
        anim = requestAnimationFrame(moveBox);
    }

    moveBox();
})();
