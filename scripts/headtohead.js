var money = "";
var turquoise = "#36c0e2";
var red = "#ce2b33";
var player_pos = 0;
var chaser_pos = -1;
var game_started = false;

$(function() {
    // Initialize games

    // Register enter event
    $(".squareinput").on('keypress', function(e) {
        // If enter key, start game
        if(e.which === 13) {
            // get number from e.g. "1" from "sq1_i"
            player_pos = parseInt(
                $(this).attr("id").substring(2, 3) // 1, 2, or 3 (string);
            );

            money = $(this).val();
            start_game(player_pos);
        }
    });

    alert(
        `
        Set up the game by entering an amount in the three text boxes.
        Then start the game with Enter in the chosen space's text box.

        When the game has started, the controls are:
            Right arrow key to advance player
            Up arrow key to advance chaser
        `
    )
});

start_game = function(chosen) {
    $(".squareinput").each(function() {
        // Remove text boxes
        $(this).remove();
    });

    // Set chosen square text
    $("#sq" + chosen).html(money);

    // Recolor squares behind
    $(".square").each(function() {
        for (var i = 0; i < chosen; i++) {
            $("#sq" + i).css("background-color", turquoise)
        }
    });

    game_started = true;
}

$(document).keydown(function(e) {
    console.log(e.keyCode);

    if (game_started) {
        // Right arrow key: Advance player
        if (e.keyCode == 39) {
            advance_player();
        }
        
        // Up arrow key: Advance chaser
        if (e.keyCode == 38) {
            advance_chaser();
        }
    }
});

advance_player = function() {
    var sq = "#sq" + player_pos;
    // Set old square to turqoise and clear it
    $(sq).css("background-color", turquoise);
    $(sq).empty();
    
    player_pos++;
    sq = "#sq" + player_pos;
    // Add text to new square
    $(sq).html(money);

    // Player won
    if (player_pos >= 7) {
        $("#contwins")[0].play();
    } else {
        $("#contmoves")[0].play();
    }
}

advance_chaser = function() {
    chaser_pos++;
    var sq = "#sq" + chaser_pos;

    $(sq).css("background-color", red);
    $(sq).empty();

    // Player caught
    if (chaser_pos == player_pos) {
        $(".square").each(function() {
            $(this).css("background-color", red)
        });

        $("#chaserwins")[0].play();

        game_started = false;
    } else {
         // Play sound
        $("#chasermoves")[0].play();
    }

}

