(function (countries) {
    // console.log('countries:', countries);

    var searchField = $("input");
    // console.log('searchField:', searchField);
    var resultsContainer = $(".results-container");
    // console.log('resultsContainer', resultsContainer);

    // 1.input event
    // IF the user types in gibberish there should be a message saying "no results"
    // IF the input field is empty, no countries should be shown

    searchField.on("input", function () {
        var inputVal = searchField.val().toLowerCase();
        // input in searchfield
        var matchResults = [];
        // array of results
        var htmlForCountries = "";
        // actual html

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(inputVal) === 0) {
                // console.log("found a match", countries[i]);
                matchResults.push(countries[i]);
                if (matchResults.length === 4) {
                    break;
                }
            }
            // STILL FIX THIS, stays as first result
            if (inputVal.length > 0 && matchResults.length === 0) {
                matchResults = ["nope"];
            }

            if (inputVal == "") {
                matchResults = [];
            }
        }
        for (var j = 0; j < matchResults.length; j++) {
            htmlForCountries +=
                '<p class="country">' + matchResults[j] + "</p>";
        }

        resultsContainer.html(htmlForCountries);
    });

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
        //!!FIX - >movekitties logic below
        //downkey //.prev()
        if (e.keyCode === 40) {
            if (renderedCountries.eq(0).hasClass("highlight")) {
                renderedCountries.eq(0).removeClass("highlight");
                renderedCountries.eq(1).addClass("highlight");
            } else if (renderedCountries.eq(1).hasClass("highlight")) {
                renderedCountries.eq(1).removeClass("highlight");
                renderedCountries.eq(2).addClass("highlight");
            } else if (renderedCountries.eq(2).hasClass("highlight")) {
                renderedCountries.eq(2).removeClass("highlight");
                renderedCountries.eq(3).addClass("highlight");
            } else {
                renderedCountries.eq(0).addClass("highlight");
            }
        }
        //upkey
        if (e.keyCode === 38) {
            if (renderedCountries.eq(3).hasClass("highlight")) {
                renderedCountries.eq(3).removeClass("highlight");
                renderedCountries.eq(2).addClass("highlight");
            } else if (renderedCountries.eq(2).hasClass("highlight")) {
                renderedCountries.eq(2).removeClass("highlight");
                renderedCountries.eq(1).addClass("highlight");
            } else if (renderedCountries.eq(1).hasClass("highlight")) {
                renderedCountries.eq(1).removeClass("highlight");
                renderedCountries.eq(0).addClass("highlight");
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
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
