function millionaire(num) {
    if (Number.isNaN(num) || num <= 0) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        return millionaire(num * 10); 
    }
}
console.log(millionaire(0));
