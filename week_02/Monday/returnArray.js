function returnArray(cls) {
    var arr = [];
    var cl = document.getElementsByClassName(cls);
    for (var i = 0; i < cl.length; i++) {
        arr.push(cl[i]);
    }
    return arr;
}

returnArray("box-outer");