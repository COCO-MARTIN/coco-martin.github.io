var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "bg.mp3"



function play(){
    audio.play()
    var prompt = document.getElementById("prompt")
    var content = document.getElementById("content")

    prompt.style.display = "none"
    content.style.display = "block"
}