(function() {
    //start the click
    startGame();
    function startGame() {
        var endgame;

        //welcoming player
        setTimeout(splashScreen, 1500);
        $(".ready").show();
        function splashScreen() {
            $(".ready").hide();
        }
        //keep track of current player
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
                "<div class='newPlayer winner'>Player " +
                    currentPlayer.slice(6) +
                    "</div>"
            );
            function playerTurn() {
                $(".newPlayer").remove();
            }
        }

        $(".column").on("click", function(e) {
            // currentTarget: clicked column
            var slotsInColumn = $(e.currentTarget).children();
            //this prevents clicks during animation of extraPiece
            if (
                $(".column")
                    .children()
                    .hasClass("extraPiece")
            ) {
                console.log("test");
                return;
            }
            //column selection: Loop backwards to find slot without p1/2 class
            for (var i = 5; i >= 0; i--) {
                //check if game is finished and add button
                if (endgame == true) {
                    return;
                } else if (
                    //loop from bottom to top + check if class assigned.
                    //if slot without p1/2 class -> add class and break loop
                    !slotsInColumn.eq(i).hasClass("player1") &&
                    !slotsInColumn.eq(i).hasClass("player2")
                ) {
                    $(e.currentTarget).append(
                        "<div class='extraPiece animationB " +
                            currentPlayer +
                            "'></div>"
                    );
                    $(e.currentTarget).on("animationend", function() {
                        $(".extraPiece").remove();
                        $(e.currentTarget).off("animationend");
                        slotsInColumn.eq(i).addClass(currentPlayer);
                        checkVic();
                        switchPlayers();
                    });
                    break;
                }
                if (i == 0) {
                    return;
                }
            }
            //check if already won
            function checkVic() {
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
                    } else if (victoryDiagonal()) {
                        victory();
                    }
                }
            }
        });

        // function for victorycheck
        function checkforVictory(slots) {
            var count = 0;
            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(currentPlayer)) {
                    count++;
                    if (count == 4) {
                        slots.eq(i).addClass("animationA");
                        slots.eq(i - 1).addClass("animationA");
                        slots.eq(i - 2).addClass("animationA");
                        slots.eq(i - 3).addClass("animationA");
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
                                //animation for winning pieces
                                slots.eq(i).addClass("animationA");
                                slots.eq(i + 7).addClass("animationA");
                                slots.eq(i + 14).addClass("animationA");
                                slots.eq(i + 21).addClass("animationA");
                                return true;
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
                                console.log(
                                    "victory DiagonalUp " + currentPlayer
                                );
                                //animation for winning pieces
                                slots.eq(j).addClass("animationA");
                                slots.eq(j + 5).addClass("animationA");
                                slots.eq(j + 10).addClass("animationA");
                                slots.eq(j + 15).addClass("animationA");
                                return true;
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
            //append comeback button
            $(".board").append(
                "<button type='button' name='button' class='comeback'>Play again?</button>"
            );
            //listener for comeback button
            $(".comeback").on("click", function() {
                location.reload();
                startGame();
            });
            // return endgame true so user cannot click anymore.
            return (endgame = true);
        }

        //column pointer
        $(".column").on("mouseover", function(e) {
            $(e.currentTarget).append("<div class='pointer'></div>");
        });
        $(".column").on("mouseout", function() {
            $(".pointer").remove();
        });
    }
})();
