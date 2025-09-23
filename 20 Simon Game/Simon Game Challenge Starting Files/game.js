// alert("Hi")
let gamePattern = [];
let userClickedPattern = [];
let start = false;
let level = 0;
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).animate({opacity:0}, 1);
    $("#" + randomChosenColor).animate({opacity:1});
    buttonSound(randomChosenColor);
    level += 1;
    $("h1").text("Level " + level);
}


$(".btn").click(function(){
    // $(this).animate({opacity:0}, 1);
    // $(this).animate({opacity:1});
    let id = $(this).attr("id");
    userClickedPattern.push(id);
    // console.log(userClickedPattern);
    animatePress(id);
    buttonSound(id);
    checkAnswer(userClickedPattern.length-1);

})

if(start === false){
    $(document).keypress(function(){
        start = true;
        $("h1").text("Level " + level);
        nextSequence();
    })
}


function buttonSound(id){
    // switch(id){
    //     case "blue":
    //         var audio = new Audio("sounds/blue.mp3");
    //         audio.play();
    //         break;
    //     case "green":
    //         var audio = new Audio("sounds/green.mp3");
    //         audio.play();
    //         break;
    //     case "red":
    //         var audio = new Audio("sounds/red.mp3");
    //         audio.play();
    //         break;
    //     case "yellow":
    //         var audio = new Audio("sounds/yellow.mp3");
    //         audio.play();
    //         break;
    // }
    var audio = new Audio("sounds/"+ id + ".mp3");
    audio.play();

}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed");
    },100)
    // $(`#${currentColor}`).removeClass("pressed");

}


function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        // console.log("correct");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence(),1000);
        }
    }
    else{
        // console.log("wrong");
        $("h1").text("Game Over, Press A Key to Restart");
        gamePattern = [];
        userClickedPattern = [];
        level = 0;
        $("body").addClass("game-over");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        start = false; // resetting boolean

    }

}