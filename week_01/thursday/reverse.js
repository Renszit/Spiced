function reverseOrder(arr) {
    var order = arr.slice(arr).reverse();
    return order; 
}

console.log(reverseOrder([1,2,3,4]));
