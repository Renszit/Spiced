// (function () {
//     var kitties = Array.from(document.querySelectorAll(".kitty-container img"));

//     function moveKitties() {
//         kitties[0].classList.add("offscreen-left");
//         kitties[0].classList.remove("onscreen");
//         kitties[1].classList.add("onscreen");
//     }

//     setTimeout(moveKitties, 3000);

//     document.addEventListener("transitionend", function (e) {
//         if (e.target.classList.value == "offscreen-left") {
//             kitties[0].classList.remove("offscreen-left");
//             kitties[kitties.length] = kitties[0];
//             kitties.shift();
//             setTimeout(moveKitties, 3000);
//         }
//     });
// })();
// solution above here does not seem ideal. Trying new stuff below:

(function () {
    var kitties = document.querySelectorAll(".kitty-container img");

    function moveKitties() {
        kitties[0].classList.add("offscreen-left");
        kitties[0].classList.remove("onscreen");
        kitties[1].classList.add("onscreen");
    }

    setTimeout(moveKitties, 3000);

    document.addEventListener("transitionend", function (e) {

        if (e.target.classList.value == "offscreen-left") {
            kitties[0].classList.remove("offscreen-left");
            kitties[kitties.length] = kitties[0];
            kitties.shift();
            setTimeout(moveKitties, 3000);
        }
    });
})();

// for (var i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", function (e) {
//         for (var j = 0; j < dots.length; j++) {
//             if (dots[j] === e.target) {
//                 console.log("dot index: ", j);
//             }
//         }
//     });
// }