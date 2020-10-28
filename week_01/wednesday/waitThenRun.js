function waitThenRun(fn) {
    setTimeout(fn, 1500);
    return fn;
}

waitThenRun(function() {
    console.log('Hello!');
    waitThenRun(function() {
        console.log('Goodbye!');
    }); 
}); 