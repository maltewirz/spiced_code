(function() {
    //keep track of current player
    var currentPlayer = "player1";
    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    //column selection: Loop backwards to find slot without p1/2 class
    $(".column").on("click", function(e) {
        // currentTarget: clicked column.   .find('.slot') select all column slots
        var slotsInColumn = $(e.currentTarget).children();
        for (var i = 5; i >= 0; i--) {
            //loop from bottom to top + check if class assigned.
            //if slot without p1/2 class -> add class and break loop
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }

        //check if already won
        if (checkforVictory(slotsInColumn)) {
            console.log("victory columns");
            return;
        } else {
            var slotsInRow = $(".row" + i);
            if (checkforVictory(slotsInRow)) {
                console.log("victory rows");
                return;
            } else {
                var slots = $(".slot");
                victoryDiagonal();
                function victoryDiagonal() {
                    for (var i = 0; i <= 20; i++) {
                        if (i == 3 || i == 9 || i == 15) {
                            i += 3;
                        }
                        if (slots.eq(i).hasClass("player1")) {
                            if (slots.eq(i + 7).hasClass("player1")) {
                                if (slots.eq(i + 14).hasClass("player1")) {
                                    if (slots.eq(i + 21).hasClass("player1")) {
                                        console.log("victory DiagonalDown");
                                    }
                                }
                            }
                        }
                    }
                    for (var j = 3; j <= 23; j++) {
                        if (j == 6 || j == 12 || j == 18) {
                            j += 3;
                        }
                        if (slots.eq(j).hasClass("player1")) {
                            if (slots.eq(j + 5).hasClass("player1")) {
                                if (slots.eq(j + 10).hasClass("player1")) {
                                    if (slots.eq(j + 15).hasClass("player1")) {
                                        console.log("victory DiagonalUp");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        switchPlayers();
    });

    // function for victorycheck
    function checkforVictory(slots) {
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
})();
