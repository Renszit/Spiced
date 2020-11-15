(function () {
    var currentPlayer = "player1";
    var currentSelect = "player1Select";

    //empty slot check/
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
                slotsInColumn.eq(i).addClass(currentPlayer) &&
                slotsInColumn.eq(i).removeClass(currentSelect);
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
            $(".column").off("mouseover");
            return;
        } else {
            var slotsInRow = $(".row" + i);
            if (checkForVictory(slotsInRow)) {
                gameSetMatch(currentPlayer);
                $(".column").off("click");
                $(".column").off("mouseover");
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
                $(".column").off("mouseover");
                return;
            } else if (
                slot.eq(j).hasClass(currentPlayer) &&
                slot.eq(j + 5).hasClass(currentPlayer) &&
                slot.eq(j + 10).hasClass(currentPlayer) &&
                slot.eq(j + 15).hasClass(currentPlayer)
            ) {
                gameSetMatch(currentPlayer);
                $(".column").off("click");
                $(".column").off("mouseover");
                return;
            }
        }

        switchPlayers();
    });

    // switch players function

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
            currentSelect = "player2Select"
            ;
        } else {
            currentPlayer = "player1";
            currentSelect = "player1Select";
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

    //mouseover;
    $(".column").on("mouseover", function (e) {
        var slotsInColumn = $(e.currentTarget).children();
        var foundEmptySlot = false;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentSelect);
                foundEmptySlot = true;
                break;
            }
        }
        if (!foundEmptySlot) {
            return;
        }
    });

    //mouseout
    $(".column").on("mouseout", function (e) {
        var slotsInColumn = $(e.currentTarget).children();
        var foundEmptySlot = false;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).removeClass(currentSelect);
                foundEmptySlot = true;
                break;
            }
        }
        if (!foundEmptySlot) {
            return;
        }
    });

    // scoreboard localhost

    //restart button.
    var restart = $("#restart");

    restart.on("click", function () {
        location.reload();
    });

    // victory dance function
    function gameSetMatch(player) {
        var slot = $(".slot");
        if (player == "player1") {
            $(".blueWins").css({
                visibility: "visible",
            });
            $("#blueMes").css({
                visibility: "visible",
            });
            //removes losing color off the board
            for (var i = 0; i < slot.length; i++) {
                if (slot.eq(i).hasClass("player2")) {
                    slot.eq(i).removeClass("player2");
                }
            }
        } else {
            $(".redWins").css({
                visibility: "visible",
            });
            $("#redMes").css({
                visibility: "visible",
            });

            for (var j = 0; j < slot.length; j++) {
                if (slot.eq(j).hasClass("player1")) {
                    slot.eq(j).removeClass("player1");
                }
            }
        }
    }
})();
