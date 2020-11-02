function isAwesome() {
    var newElem = document.createElement("div");
    var awesome = document.createTextNode("AWESOME!");
    newElem.appendChild(awesome);
    var body = document.getElementById("div1");
    document.body.insertBefore(newElem, body);
    newElem.style.zIndex = "2147483647";
    newElem.style.left = "20px";
    newElem.style.top = "100px";
    newElem.style.fontSize = "200px";
    newElem.style.position = "fixed";
}

isAwesome();
