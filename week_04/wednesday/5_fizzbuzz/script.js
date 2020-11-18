function* fizzbuzz() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 == 0) {
            yield "fizz";
        }
        if (i % 5 == 0) {
            yield "buzz";
        }
        if (i % 3 && i % 5 == 0) {
            yield "fizzbuzz";
        } else {
            yield i;
        }
    }
}


for (let value of fizzbuzz()){
    console.log("value:", value);
}