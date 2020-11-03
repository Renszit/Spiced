console.log("sanity check");

window.addEventListener("mousemove", function (event) {
    var elem = document.getElementById("element");
    elem.style.top = event.clientY - 50 + "px";
    elem.style.left = event.clientX - 50 + "px";
});
