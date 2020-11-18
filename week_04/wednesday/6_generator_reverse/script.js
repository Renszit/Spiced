
const array = [1, 2, 3, 4, 5];

function* genaReverse(arr){
    let clone = [...arr];
    yield clone.reverse();   
}

const it = genaReverse(array);
const val = it.next();

console.log(val);
