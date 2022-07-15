const spirit = document.getElementById("spirit")
const scoreScreen = document.getElementById("score")
let score = 0

function random(){
    return Math.floor(Math.random() * 100)
}

function game(){
    spirit.style.top = `${random()}%`
    spirit.style.left = `${random()}%`
    score += 1
    scoreScreen.innerText = score
}

let autoPosition = 1000
setInterval(() => {
    autoPosition -= 10
}, 5000)


setInterval(() => {
    spirit.style.top = `${random()}%`
    spirit.style.left = `${random()}%`
}, autoPosition)

function reset(){
    scoreScreen.innerText = "0"
    score = 0
}