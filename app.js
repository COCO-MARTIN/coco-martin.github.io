var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "bg.mp3"



function play(){
    audio.play()
    var prompt = document.getElementById("prompt")

    prompt.style.display = "none"
}