(function () {
    var searchField = $("input");
    var resultsContainer = $(".results-container");
    // 1.input event
    // IF the user types in gibberish there should be a message saying "no results"
    // IF the input field is empty, no countries should be shown

    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        // input in searchfield
        // array of results
        var htmlForCountries = "";
        // actual html
        $.ajax({
            url: "https://spicedworld.herokuapp.com/",
            data: {
                q: inputVal,
            },
            success: function (data) {
                for (var j = 0; j < data.length; j++) {
                    htmlForCountries +=
                        '<p class="country">' + data[j] + "</p>";
                }
                if (data.length === 0) {
                    htmlForCountries = ["nope"];
                }
                if (inputVal == "") {
                    htmlForCountries = "";
                }
                resultsContainer.html(htmlForCountries);
            },
            error: function (error) {
                console.log("something went wrong!", error);
            },
        });
    });

    // re-use:
    //         }
    //         if (inputVal == "") {
    //             matchResults = [];
    //         }
    //     }
    //     if (inputVal.length > 0 && matchResults.length === 0) {
    //         matchResults = ["nope"];
    //     }

    //     for (var j = 0; j < matchResults.length; j++) {
    //         htmlForCountries +=
    //             '<p class="country">' + matchResults[j] + "</p>";
    //     }

    //     resultsContainer.html(htmlForCountries);
    // });

    //2. mouseover event
    // very first step: figure out mouseover hover event listener
    // look at: event delegation in jQuery
    // create a delegated event -> read up on this!

    resultsContainer.on("mouseover", "p", function () {
        $(this).addClass("highlight");
    });

    resultsContainer.on("mouseout", "p", function () {
        $(this).removeClass("highlight");
    });

    //3. mousedown event
    // whichever has the highlight text, add to the value of the input field
    // $('input').val('something'); -> setter.
    // input you are on at the time, value goes into val of input

    resultsContainer.on("mousedown", "p", function (e) {
        searchField.val($(e.target).text());
    });

    // 4. keydown event
    // eventlistener that listens to keydown.
    // only want to make certain things happen on certain points
    // console.log!/step by step
    // jQuery has methods to traverse results and add an remove classes

    searchField.on("keydown", function (e) {
        // console.log("pressing a keydown");
        var renderedCountries = $("p");
        var highlight = $(".highlight");

        //downkey //.prev()// below should get fixed
        if (e.keyCode === 40) {
            if (renderedCountries.hasClass("highlight") == false) {
                renderedCountries.eq(0).addClass("highlight");
            } else if (highlight.length == 1) {
                highlight.removeClass("highlight");
                highlight.next().addClass("highlight");
            }
        }
        //upkey
        if (e.keyCode === 38) {
            if (renderedCountries.hasClass("highlight") == false) {
                renderedCountries.eq(3).addClass("highlight");
            } else if (highlight.length == 1) {
                highlight.removeClass("highlight");
                highlight.prev().addClass("highlight");
            }
        }
        //enter
        if (e.keyCode === 13) {
            searchField.val(highlight.text());
        }
    });

    // 5. focus -> event
    searchField.on("focus", function () {
        resultsContainer.show();
    });
    // 6. blur -> event
    searchField.on("blur", function () {
        resultsContainer.hide();
    });
    // jQuery has methods that make things appear and dissapear.
})();
