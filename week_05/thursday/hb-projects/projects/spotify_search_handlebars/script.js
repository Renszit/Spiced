(function () {
    var moreButton = $("#moreButton");
    var nextUrl;

    var results; 
    // initial ajax reguest

    //trigger initial ajax request
    $("#submit-button").on("click", function () {
        var userInput = $("input").val();
        var albumOrArtist = $("select").val();

        $.ajax({
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: albumOrArtist,
            },
            success: (results = function (response) {
                response = response.artists || response.albums;
                var myHtml = "";
                var redirection = "";

                // looks for ?scroll=infinite in browser.
                if (location.search.indexOf("scroll=infinite") > -1) {
                    checkScrollPosition();
                } else {
                    moreButton.css({ visibility: "visible" });
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
                        "<div>" +"<a href=" +
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
                        "</a>" + "</div>";

                    $("#results-container").html(myHtml);
                }
                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );
            }),
        });
    });

    // check scroll position
    function checkScrollPosition() {
        setTimeout(function () {
            if (
                $(window).height() + $(document).scrollTop() >=
                $(document).height() - 300
            ) {
                $.ajax({
                    url: nextUrl,
                    success: results,
                });
                // console.log("at bottom of page!");
                // moreButton.css({ visibility: "hidden" }),
            } else {
                checkScrollPosition();
            }
        }, 500);
    }
    //more button
    moreButton.on("click", function () {
        $.ajax({
            method: "GET",
            url: nextUrl,
            success: results,
        });
    });
})();
