const keys = document.querySelectorAll(".drum");
var len = keys.length;
for (let i=0; i<len; i++){
    keys[i].addEventListener("click", function(){
        var audio = new Audio("./sounds/" + i + ".mp3");
        audio.play();
    })
}