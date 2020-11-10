(function () {
    var cookieBox = $(".cookiebox");
    var cookieX = $("#cookieX");
    var overlay = document.getElementById("overlay");
    var sidenav = document.getElementById("sidenav");
    var x = document.getElementById("x");
    var hamburger = document.getElementById("hamburgermenu");
    
    hamburger.addEventListener("click", function () {
        sidenav.classList.add("on");
    });

    hamburger.addEventListener("click", function () {
        overlay.classList.add("overlayOff");
    });

    x.addEventListener("click", function () {
        sidenav.classList.remove("on");
    });

    x.addEventListener("click", function () {
        overlay.classList.remove("overlayOff");
    });

    overlay.addEventListener("click", function () {
        overlay.classList.remove("overlayOff");
    });

    overlay.addEventListener("click", function () {
        sidenav.classList.remove("on");
    });

    sidenav.addEventListener("click", function (evt) {
        evt.stopPropagation();
    });

    cookieX.on("click", function () {
        cookieBox.css({
            visibility: "hidden",
        });
    });
})();

//addEventListener for darkmode styles?
