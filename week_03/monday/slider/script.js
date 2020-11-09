var slider = $("#slider");
var container = $("#container");
var topimg = $("#top-image");
var sliding = false;
var x = 300;

$(slider).on("mousedown", function () {
    sliding = true;
});

$(slider).on("mouseup", function () {
    sliding = false;
});

$(container).on("mousemove", function (e) {
    if (sliding == true) {
        x = e.pageX;
        slider.eq(0).css({
            left: x - 20 + "px",
        });
        topimg.eq(0).css({
            width: x - 20 + "px",
        });
    }
    if (x == 610) {
        sliding = false;
    }
    if (x == 20) {
        sliding = false;
    }
});

