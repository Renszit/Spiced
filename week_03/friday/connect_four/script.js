(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        var slotsInColumn = $(e.currentTarget).children();
        var foundEmptySlot = false;
        var slot = $(".slot");
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
        } else {
            var slotsInRow = $(".row" + i);
            if (checkForVictory(slotsInRow)) {
                gameSetMatch(currentPlayer);
                $(".column").off("click");
                //player won in row, do victory dance.
                return;
            }
        }
        //diagonal check.
        for (var j = 0; j < slot.length; j++) {
            if (
                slot.eq(j).hasClass(currentPlayer) &&
                slot.eq(j + 7).hasClass(currentPlayer) &&
                slot.eq(j + 14).hasClass(currentPlayer) &&
                slot.eq(j + 21).hasClass(currentPlayer)
            ) {
                gameSetMatch(currentPlayer);
                $(".column").off("click");
                return;
            } else if (
                slot.eq(j).hasClass(currentPlayer) &&
                slot.eq(j + 5).hasClass(currentPlayer) &&
                slot.eq(j + 10).hasClass(currentPlayer) &&
                slot.eq(j + 15).hasClass(currentPlayer)
            ) {
                gameSetMatch(currentPlayer);
                $(".column").off("click");
                return;
            }
        }

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

    // victory dance function
    function gameSetMatch(player) {
        if (player == "player1") {
            $(".blueWins").css({
                visibility: "visible",
            });
        } else {
            $(".redWins").css({
                visibility: "visible",
            });
        }
    }
})();
