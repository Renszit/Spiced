function getLessThanZero(arry) {
    var newArr = arry.filter(function(arr) {
        if (arr < 0) {
            return true;
        }
    });
    return newArr;
}

console.log(getLessThanZero([1,2,3,-20,0,-10]));
console.log(getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
console.log(getLessThanZero([1, 2])); //[]
