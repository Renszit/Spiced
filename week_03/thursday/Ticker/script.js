(function () {
    // var req = requestAnimationFrame(moveBox);
    // var lnks = $("a");
    var lft = $("#ticker").offset().left;
    var anim;

    $.ajax({
        url: "/headlines.json",
        method: "GET",
        success: function (data) {
            // console.log("headlines:", headlines);
            var myHtml = "";
            var tckr = $("#ticker");

            for (var i = 0; i < data.length; i++) {
                console.log("headlines[i]", data[i]);
                myHtml +=
                    "<a href=" + data[i].links + ">" + data[i].text + "</a>";
                tckr.html(myHtml);
            }
            tckr.on("mouseenter", function (e) {
                console.log("mouseenter:", e);
                cancelAnimationFrame(anim);
            });

            tckr.on("mouseleave", function (e) {
                console.log("mouseleave:", e);
                requestAnimationFrame(moveBox);
            });
            moveBox();
        },
        error: function (error) {
            console.log("something went wrong:", error);
        },
    });

    function moveBox() {
        if (lft <= -1 * $("a").eq(0).offsetWidth) {
            lft += $("a").eq(0).offsetWidth;
            $("#ticker").append($("a").eq(0));
        }
        lft--;
        $("#ticker").css({
            left: lft + "px",
        });
        $("a").eq(0).offsetWidth;
        anim = requestAnimationFrame(moveBox);
    }
    moveBox();
})();
