var textArea = $("textarea");
var input;

console.log(textArea);

try {
    if (window.localStorage.getItem("textData")) {
        textArea.val(window.localStorage["textData"]);
    }
} catch (error) {
    console.log(error);
}

textArea.on("input", function () {
    input = textArea.val();
    window.localStorage.setItem("textData", input);
});
