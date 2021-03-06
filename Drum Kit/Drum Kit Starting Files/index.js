
document.addEventListener("keydown", function(event){

    makesound(event.key);
  
    buttonAnimation(event.key);
  
});

var numberOfButtons = document.querySelectorAll(".drum").length;

for(var i= 0; i<=numberOfButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var button=this.innerHTML;
        makesound (button);

        buttonAnimation(button);
        
    });

}

function makesound (key) {
    switch(key){
        case "w": 
            var crash =new Audio("./sounds/crash.mp3");
            crash.play();
        case "a": 
            var kickBass =new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        case "s": 
            var snare =new Audio("./sounds/snare.mp3");
            snare.play();
        case "d": 
            var tom1 =new Audio("./sounds/tom-1.mp3");
            tom1.play();
        case "j": 
            var tom2 =new Audio("./sounds/tom-2.mp3");
            tom2.play();
        case "k": 
            var tom3 =new Audio("./sounds/tom-3.mp3");
            tom3.play();
        case "l": 
            var tom4 =new Audio("./sounds/tom-4.mp3");
            tom4.play();
        default:
            console.log(key);
    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  