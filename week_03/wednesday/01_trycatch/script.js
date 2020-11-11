var input;
var textAr = $("textarea");
var button = $("button");


textAr.on('input', function(){
    input = textAr.val();
    // console.log("something is being inputtet", input);
});

button.on('click', function() {
    try {
        JSON.parse(input);
        alert("Amazing, this is JSON!");
    } catch (error) {
        alert("THis is NOT JSON!");
    }
    // console.log("the button has been clikert!:", button);
});


// console.log(textAr);



