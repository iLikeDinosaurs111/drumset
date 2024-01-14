const keys = document.querySelectorAll(".drum");
var len = keys.length;
for (let i=0; i<len; i++){
    keys[i].addEventListener("click", function(){
        var audio = new Audio("./sounds/" + i + ".mp3");
        audio.play();
    })
}
document.addEventListener("keydown", function(event){
    makeSound(event.key);
});
function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio ("./sounds/1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio ("./sounds/2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio ("./sounds/3.mp3");
            audio3.play();
        break;
        case "d":
            var audio4 = new Audio ("./sounds/4.mp3");
            audio4.play();
        break;
        case "j":
            var audio5 = new Audio ("./sounds/5.mp3");
            audio5.play();
        break;
        case "k":
            var audio6 = new Audio ("./sounds/6.mp3");
            audio6.play();
        break;
        case "l":
            var audio7 = new Audio ("./sounds/7.mp3");
            audio7.play();
        break;
    }
}
