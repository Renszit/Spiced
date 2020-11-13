(function () {
    var currentPlayer = "player1";

    $(".column").on("click", function (e) {
        // find the lowest empty slot
        var slotsInColumn = $(e.currentTarget).children();
        var foundEmptySlot = false;

        //backwards loop, checking if they have class for player 1 or 2
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
            //add flashy red error/background image;
        }

        //check for victory:
        if (checkForVictory(slotsInColumn)) {
            // console.log("won in column");
            gameSetMatch(currentPlayer);
            return;
        } else {
            var slotsInRow = $(".row" + i);
            // console.log(slotsInRow);
            if (checkForVictory(slotsInRow)) {
                // console.log("won in row");
                gameSetMatch(currentPlayer);
                return;
            }
        }
        // } else {
        //     //check diagonally;
        // }
        switchPlayers();
    });

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }
    
    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    //WINNER   
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function gameSetMatch(player) {
        if (player == 'player1') {
            // insert red random gif here
            console.log("player 1");
        } else {
            // insert blue random gif here
            console.log('player2');
        }
    } 

})();


//GIPHY API for RED & BLUE // victory function
