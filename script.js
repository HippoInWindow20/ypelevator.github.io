function play(filename) {
    document.getElementById("source").src = filename
    document.getElementById("player").load()
    document.getElementById("player").play()
}

var bg = 0
// alert("CHECK YOUR VOLUME")
document.body.addEventListener("contextmenu", function (event){
    event.preventDefault()
})

function black() {
    if (bg == 0){
        bg = 1
        document.body.style.transition = "0s"
        document.body.style.background = "#222422"
    }else if (bg == 1){
        bg = 2
        document.body.style.transition = "0.5s"
        document.body.style.background = "#000"
    }else{
        bg = 0
        document.body.style.transition = "0.5s"
        document.body.style.background = "url('bg.jpg')"
    }
}