(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        var slotsInColumn = $(e.currentTarget).children();
        var foundEmptySlot = false;
        var slotsInRow = $(".row" + i);

        //backwards loop, checking if class for player 1 or 2
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                foundEmptySlot = true;
                break;
            }
        }
        if (!foundEmptySlot) {
            return;
        }

        //horizontal and/or vertical win
        if (checkForVictory(slotsInColumn)) {
            // console.log("won in column");
            gameSetMatch(currentPlayer);
            $(".column").off("click");
            return;
        } else if (checkForVictory(slotsInRow)) {
            // console.log("won in row");
            gameSetMatch(currentPlayer);
            $(".column").off("click");
            return;
        }

        //diagonal win
        var slot = $(".slot");
        var col = $(e.currentTarget);

        for (var k = 0; k < slot.length; k++) {
            if (slot.eq(k).hasClass("player1")) {
               // and 1 down and 1 column up has same,
               // and again one down and 1 colum has same
               // and again.
                }
            }
        }

        // gameSetMatch("player1");
        // $(".column").off("click");
        // return;
        //     }
        //     // if (slot.eq(k).hasClass("player1")) {
        //     if (slot.eq(k).hasClass("player2")) {
        //         // console.log("player 2");
        //     }
        // }

        //  else
        // //diagonal win
        // if (checkForVictory(diagonalFour)){
        //     gameSetMatch(currentPlayer);
        //     $(".column").off("click");
        //     return;
        // }

        switchPlayers();
    });

    // switch players function

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    //check for victory function

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function gameSetMatch(player) {
        if (player == "player1") {
            $("#blueWins").css({
                visibility: "visible",
            });
            // insert random blue
        } else {
            $("#redWins").css({
                visibility: "visible",
            });
            //random red gif
        }
    }
})();

//GIPHY API for RED & BLUE // victory function
// using ajax to import a random gif every time
//
