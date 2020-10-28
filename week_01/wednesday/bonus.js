
function getTotaler() {
    var total= 0;
    return function totaler(arg) {
        return (total += arg);
    }; 
}

var totaler = getTotaler();

console.log(totaler(1));
console.log(totaler(2));
console.log(totaler(5));