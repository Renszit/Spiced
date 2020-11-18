(function () {
    var defaultImg = "https://i.pinimg.com/originals/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6.png";
    var moreButton = $("#moreButton");
    var doc = $(document);
    var win = $(window);
    var infScroll = location.search.search(/\bscroll=infinite\b/) > -1;
    var nextUrl;
    var results;
    var timer;

    function getData (url) {
        var q, type, moreWasClicked;

    }






    $("#submit-button").on("click", function () {
        var userInput = $("input").val();
        var albumOrArtist = $("select").val();


        
        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            //url of our proxy
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: (results = function (response) {
                // console.log("response:", response);
                response = response.artists || response.albums;
                var myHtml = "";
                var redirection = "";

                if (location.search.indexOf("scroll=infinite") > -1) {
                    checkScrollPosition();
                }
                //html result
                if (response.items.length > 0) {
                    $("#resultsFor").html(
                        "<h3>" + "Results for " + userInput + "</h3>"
                    );
                } else {
                    $("#resultsFor").html(
                        "<h3>" + "No results for " + userInput + "</h3>"
                    );
                }

                for (var i = 0; i < response.items.length; i++) {
                    var imageUrl =
                        "https://i.pinimg.com/originals/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6.png";
                    if (response.items[i].images[0]) {
                        imageUrl = response.items[i].images[0].url;
                    }
                    redirection = response.items[i].external_urls.spotify;
                    myHtml +=
                        "<a href=" +
                        redirection +
                        ">" +
                        "<img src=" +
                        imageUrl +
                        ">" +
                        "</a>" +
                        "<a href=" +
                        redirection +
                        ">" +
                        "<div>" +
                        response.items[i].name +
                        "</div>" +
                        "</a>";

                    $("#results-container").html(myHtml);

                    nextUrl =
                        response.next &&
                        response.next.replace(
                            "api.spotify.com/v1/search",
                            "spicedify.herokuapp.com/spotify"
                        );

                    if (nextUrl !== null) {
                        moreButton.css({ visibility: "visible" });
                    }
                }
            }),
        });
    });

    //check scroll position
    function checkScrollPosition() {
        setTimeout(function () {
            if (
                $(window).height() + $(document).scrollTop() ===
                $(document).height()
            ) {
                moreButton.css({ visibility: "hidden" });
                $.ajax({
                    method: "GET",
                    url: nextUrl,
                    success: results,
                });
                console.log("at bottom of page!");
            } else {
                checkScrollPosition();
            }
        }, 500);
    }

    moreButton.on("click", function () {
        $.ajax({
            method: "GET",
            url: nextUrl,
            success: results,
        });
    });
})();
