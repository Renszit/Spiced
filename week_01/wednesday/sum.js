function sum() {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {
        a += arguments[i];
    }
    return a;
}

console.log(sum(0,21,233,12));
