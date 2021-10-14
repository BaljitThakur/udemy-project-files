
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern =[];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keydown(function(){
    if(!started){
        nextSequence();
        $("#level-title").text("Level " + level);
        started = true;
    }
});


$(".btn").click( function(){
    
    var userChosencolor = $(this).attr("id");
    userClickedPattern.push(userChosencolor);
    
    playSound(userChosencolor);
    animation(userChosencolor);

    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer (CurrentLevel){

    if(gamePattern[CurrentLevel] == userClickedPattern[CurrentLevel]){
        console.log("Sucess");

        if (userClickedPattern.length == gamePattern.length){
            
            setTimeout(function(){
                nextSequence();
            },1000);
        };

    }
    else {
        console.log("wrong");
        var wrongaudio = new Audio("sounds/wrong.mp3");
        
        wrongaudio.play();
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game over, Press any key to Restart");

        startOver();
    }

};

function startOver(){
    gamePattern = [];
    level = 0;
    started = false;
};


function nextSequence() {

    userClickedPattern=[];
    
    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

};


function playSound(name){
    
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    
};


function animation(color){

    $("#"+color).addClass("pressed");
   
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
};



