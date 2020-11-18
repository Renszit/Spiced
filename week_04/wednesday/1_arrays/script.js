const arrywarry = [1, 2, 3, 4];


function arrywar(arr) {
    const [...rest] = arr;
    const newArr = rest.reverse();
    return newArr;
}


console.log(arrywar(arrywarry));