(function() {
    $('.column').eq(0).children(); //use this to find colum 0

    $('.column').on('click', function(e){
        // e.currentTarget this give the column the user has clicked on
        var slotsInColumn = $(e.currentTarget).find('.slot');

        for (var i = 5; i >= 0; i--) {
            if (!slotsInColumn.eq(i).hasClass('player1')
                &&
                !slotsInColumn.eq(i).hasClass('player2')
            )   {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }
        if (i == -1) {
            return;
        }

        if (checkforVictory(slotsInColumn)) {
            //do victory dance
            return;
        } else {
            var slotsInRow = $('.row' + i).find('slot');
            if (checkforVictory(slotsInRow)) {
                //do victory dacne
                return;
            } else {
                //diagonal check
            }
        }

        switchPlayers();
    });

    //keep track of current player is
    var currentPlayer = 'player1';

    function switchPlayers() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
        }
    }
})();

// another way to check
function checkforVictory(slots) {
    var count = 0;
    for (var i = 0; i > slots.length; i++) {
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
