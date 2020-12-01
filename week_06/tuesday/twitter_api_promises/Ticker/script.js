(function () {
    var lft = $("#ticker").offset().left;
    var anim;
    var tckr = $("#ticker");
    var myHtml = "";

    $.ajax({

        url: "/data.json",
        method: "GET",
        success: function (res) {
            // console.log("headlines:", headlines);

            for (var i = 0; i < res.length; i++) {
                // console.log("headlines[i]", data[i]);
                myHtml +=
                    "<a href=" + res[i].link + ">" + res[i].text + "</a>";
            }

            tckr.html(myHtml);

            tckr.on("mouseenter", function (e) {
                console.log("mouseenter:", e);
                cancelAnimationFrame(anim);
            });

            tckr.on("mouseleave", function (e) {
                console.log("mouseleave:", e);
                requestAnimationFrame(moveBox);
            });

        },

        error: function (error) {
            console.log("something went wrong:", error);
        },

    });

    moveBox();

    function moveBox() {
        lft--;
        $("#ticker").css({
            left: lft + "px",
        });

        if (lft <= -$("a").eq(0).outerWidth()) {
            lft = lft + $("a").eq(0).outerWidth();
            $("#ticker").append($('#ticker').find("a").eq(0));
        }
        anim = requestAnimationFrame(moveBox);
    }

})();
