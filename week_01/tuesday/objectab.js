var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};

var b = {};

for (var obj in a) {
    b[a[obj]] = obj;
}
console.log(b);