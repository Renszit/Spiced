const arrywarry = [1, 2, 3, 4];
const anotherArrywarry = [0,4,5,5,6,7];

function arrywarCombine(arr,arry) {
    const newArr = [...arr, ...arry];
    return newArr;
}

console.log(arrywarCombine(arrywarry,anotherArrywarry));
