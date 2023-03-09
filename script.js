function play(filename) {
    document.getElementById("source").src = filename
    document.getElementById("player").load()
    document.getElementById("player").play()
}

var blacked = false
alert("CHECK YOUR VOLUME")

function black() {
    if (blacked == false) {
        blacked = true
        document.body.style.background = "#000"
    } else {
        blacked = false
        document.body.style.background = "#222422"
    }
}