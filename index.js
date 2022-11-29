var buttonsCount = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonsCount; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML); 
        buttonAnimation(this.innerHTML);      
    });
}

document.addEventListener("keydown", function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function playAudio(audioFilePath) {
    var audio = new Audio(audioFilePath);
    audio.play();
}

function makeSound(keyStroke)
{
    switch (keyStroke) {
        case "w":
            playAudio("sounds/crash.mp3");
            break;
        case "a":
            playAudio("sounds/kick-bass.mp3");
            break;
        case "s":
            playAudio("sounds/snare.mp3");
            break;
        case "d":
            playAudio("sounds/tom-1.mp3");
            break;

        case "j":
            playAudio("sounds/tom-2.mp3");
            break;

        case "k":
            playAudio("sounds/tom-3.mp3");
            break;

        case "l":
            playAudio("sounds/tom-4.mp3");
            break;

        default:
            playAudio("sounds/tom-4.mp3");
            break;
    }
}

function buttonAnimation(keyStroke){
   var currentButton = document.querySelector("." + keyStroke); 
   currentButton.classList.toggle("pressed");
   setTimeout(() => {
    currentButton.classList.toggle("pressed");
   }, 100);
}



