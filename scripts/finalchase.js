
// player counter
p = 0;
// Chase counter
c = 0;
// Colour for squares
blue = "#1a5cde";
orange = "#de621a";
// How long players get (seconds)
time_init = 120

// Actual time variable (do not change)
time = time_init;

// Timer flag
do_countdown = false;

var squares = [];
$(document).ready(function(){
    /*
    $('.square').each(function(){
        squares.push($(this).attr("id"));
        $(this).css("background", "red")
    });
    */
    show_controls();
}); 

show_controls = function() {
    alert(
        `
        Ensure the window is focused so that it can receive keyboard input.

        Controls:
            Right arrow key: Advance players
            Up arrow key: Advance chaser
            Down arrow key: Push back chaser

            I: Pause timer
            O: Resume timer
            P: Reset timer

            H: Show this menu again
        `
    )
}

// Keypress events
$(document).keydown(function(e) {
    console.log(e.keyCode);
    // Right arrow key (advance players)
    if (e.keyCode == 39) {
        p = p + 1;
        advance_players(p, c);
    }

    // Up arrow key (advance chaser)
    if (e.keyCode == 38) {
        // Don't do anything if the players are already caught
        if (c < p) {
            c = c + 1;
            advance_chaser(c);
        }
    }

    // Down arrow key (push chaser back)
    if (e.keyCode == 40) {
        // Don't do anything if the chaser has no points
        if (c > 0) {
            push_back(c, p);
            c = c - 1;
        }
    }

    // Pause timer (I)
    if (e.keyCode == 73) {
        do_countdown = false;
        // Pause audio
        $("#finalchase")[0].pause();

        // Play sound
        $("#stoptheclock")[0].play();
    }

    // Resume timer (O)
    if (e.keyCode == 79) {
        do_countdown = true;
        $("#finalchase")[0].play();
    }

    // Reset timer (P) and pause
    if (e.keyCode == 80) {
        time = time_init;
        $("#timer").html(get_formatted_time(time));
        
        // Pause audio
        $("#finalchase")[0].pause();
        // Reset song
        $("#finalchase")[0].currentTime = 0;
        
        // Pause timer
        do_countdown = false;
    }

    // Show help (H)
    if (e.keyCode == 72) {
        show_controls();
    }
});

advance_players = function(p, c){
    // Create square
    jQuery('<div>', {
        id: 'sq' + p,
        class: 'square',
    }).appendTo('#squares');

    // Shrink squares
    var width = $("#squares").width();
    $('.square').each(function(){
        $(this).width((width/p) - 6);
    });

    // Update text
    if (p-1 != c) {
        // Empty previous but only if it's not
        // the square the chaser is on
        $('#sq'+(p-1)).empty(); 
    }

    $('#sq'+p).html(p); // Add new

    // Play sound
    $("#contanswer")[0].play();
}

advance_chaser = function(c, p) {
    // Change colour
    $('#sq' + c).css("background", orange);
    // Update text
    $('#sq' + (c-1)).empty();
    $('#sq' + c).html(c);

    // Play sound
    $("#chaseranswer")[0].play();
}

push_back = function(c, p) {
    // Change colour back
    $('#sq' + c).css("background", blue);
    // Erase text if it's not the square players are on
    if (c != p) {
        $('#sq' + c).empty();
    }
    // Add text to previous square
    $('#sq' + (c-1)).html(c-1);

    // Play sound
    $("#pushback")[0].play();
}

// Timer event
$(function() {
    $("#timer").html(get_formatted_time(time));
    timer = setInterval(function() {
        if (do_countdown) {
            $("#timer").html(get_formatted_time(--time));
            if (time == 0) { do_countdown = false; };
        }
    }, 1000);
});

get_formatted_time = function(secs) {
    var mins = Math.floor(secs / 60);
    var secs = secs % 60;

    var secs_string = String(secs).padStart(2, '0')

    return mins + ":" + secs_string;
}