function waitThenRun(fn) {
    setTimeout(fn, 1500);
}

waitThenRun(function() {
    console.log('Hello!');
    waitThenRun(function() {
        console.log('Goodbye!');
    }); 
}); 