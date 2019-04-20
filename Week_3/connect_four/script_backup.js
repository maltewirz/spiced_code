(function() {
    //keep track of current player

    setTimeout(splashScreen, 1500);
    $(".ready").show();
    function splashScreen() {
        $(".ready").hide();
    }

    var currentPlayer = "player1";
    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
        //display playerTurn
        setTimeout(playerTurn, 500);
        $(".board").append(
            "<div class='winner'>Player " + currentPlayer.slice(6) + "</div>"
        );
        function playerTurn() {
            $(".winner").remove();
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
            victory();
            return;
        } else {
            var slotsInRow = $(".row" + i);
            if (checkforVictory(slotsInRow)) {
                console.log("victory rows");
                victory();
                return;
            } else {
                victoryDiagonal();
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

    function victoryDiagonal() {
        var slots = $(".slot");
        for (var i = 0; i <= 20; i++) {
            if (i == 3 || i == 9 || i == 15) {
                i += 3;
            }
            if (slots.eq(i).hasClass(currentPlayer)) {
                if (slots.eq(i + 7).hasClass(currentPlayer)) {
                    if (slots.eq(i + 14).hasClass(currentPlayer)) {
                        if (slots.eq(i + 21).hasClass(currentPlayer)) {
                            console.log(
                                "victory DiagonalDown " + currentPlayer
                            );
                            victory();
                        }
                    }
                }
            }
        }
        for (var j = 3; j <= 23; j++) {
            if (j == 6 || j == 12 || j == 18) {
                j += 3;
            }
            if (slots.eq(j).hasClass(currentPlayer)) {
                if (slots.eq(j + 5).hasClass(currentPlayer)) {
                    if (slots.eq(j + 10).hasClass(currentPlayer)) {
                        if (slots.eq(j + 15).hasClass(currentPlayer)) {
                            console.log("victory DiagonalUp " + currentPlayer);
                            victory();
                        }
                    }
                }
            }
        }
    }

    //victory message
    function victory() {
        $(".board").append(
            "<div class='winner'>Player " +
                currentPlayer.slice(6) +
                " WON </div>"
        );
    }

    //column pointer
    $(".column").on("mouseover", function(e) {
        $(e.currentTarget).append("<div class='pointer'></div>");
    });
    $(".column").on("mouseout", function() {
        $(".pointer").remove();
    });
})();
