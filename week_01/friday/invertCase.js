function invertCase(string) {
    var out = "";
    for (var i in string) {
        if (string[i].toUpperCase() === string[i]) {
            out += string[i].toLowerCase();
        } else {
            out += string[i].toUpperCase();
        }
    }
    return out;
}

console.log(invertCase("JaskaaALod010sss"));

