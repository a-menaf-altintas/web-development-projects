// Start the game
var level = 0;

var started = false;

// Initialize an empty array
var gamePattern = [];

// Create button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Another empty array
var userClickedPattern = [];


// Function detects keypress

$(document).keypress(function() {
    if (!started) {

        title = "Level " + level;
        $("#title").text(title);
        nextSequence();
        started = true;

    }



});



// Detect the id of the botton clicked
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    // Call checkAnswer() after a user has clicked and chosen their answer, 
    // passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length - 1);

});



//Function check answer
function checkAnswer(currentLevel) {

    //Check if the most recent user answer is the same as the game pattern. 
    // If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //If the user got the most recent answer right in step 3, 
        // then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            // Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function() {
                nextSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");

        //In the sounds folder, there is a sound called wrong.mp3, 
        // play this sound if the user got one of the answers wrong.
        playSound("wrong");

        // In the styles.css file, there is a class called "game-over", 
        // apply this class to the body of the website 
        // when the user gets one of the answers wrong and then remove it after 200 milliseconds.
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        //Change the h1 title to say "Game Over, 
        // Press Any Key to Restart" if the user got the answer wrong.
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

    }

}


// Create a function which fills the empty array with randomly chosen colors
function nextSequence() {

    userClickedPattern = [];
    // level up
    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 3) + 1;

    var randomChosenColour = buttonColours[randomNumber];


    gamePattern.push(randomChosenColour);

    id = "#" + randomChosenColour;

    $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

};

// Function that triggers the sound effect
function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();


}

// Function that creates animation
function animatePress(params) {

    $("#" + params).addClass("pressed");

    setTimeout(function() {
        $("#" + params).removeClass("pressed");

    }, 100);

}

// Start over Fuvntion
function startOver() {
    level = 0;
    started = false;
    gamePattern = [];

}