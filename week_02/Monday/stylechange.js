function styleChange(str) {
    var allstr = document.querySelectorAll(str);
    for (var i = 0; i < allstr.length; i++) {
        allstr[i].style.fontStyle = "italic";
        allstr[i].style.fontWeight = "bold";
        allstr[i].style.textDecoration = "underline";
    }
}

styleChange("p");
