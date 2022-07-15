// get the spirit element
const spirit = document.getElementById("spirit")

// get the score screen
const scoreScreen = document.getElementById("score")

// save the current score in memory
let score = 0

// generate a random number
function random(){
    return Math.floor(Math.random() * 100)
}

// this function will invoke when the user click on the spirit
function game(){

    // reset the spirit position
    spirit.style.top = `${random()}%`
    spirit.style.left = `${random()}%`

    // increase the score
    score += 1

    // show the current score
    scoreScreen.innerText = score
}

// set the time to auto reset position the spirit
let autoPositionTime = 1000 // one second

setInterval(() => {
    // reset the spirit position
    spirit.style.top = `${random()}%`
    spirit.style.left = `${random()}%`

}, autoPositionTime)

// this function will invoke when the user click the reset button
function reset(){

    // set the current score value of in the screen to 0
    scoreScreen.innerText = "0"

    // set the score to 0
    score = 0
}
