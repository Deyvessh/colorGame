
var scorePlayer1 = 0;
var scorePlayer2 = 0;

var gameOver = false;
var winningScore = 5;

var playerButton1 = document.getElementById("button1");
var displayHeader1 = document.getElementById("display1");

var playerButton2 = document.getElementById("button2");
var displayHeader2 = document.getElementById("display2");

var inputPlayer = document.querySelector("input");

var playTo = document.getElementById("playto");

var resetButton = document.getElementById("reset");


playerButton1.addEventListener("click", function() {

    if (!gameOver) {
        scorePlayer1++;
        if (scorePlayer1 === winningScore) {
            displayHeader1.classList.add("winner");
            gameOver = true;
        }
        displayHeader1.textContent = scorePlayer1;
    }     
});

playerButton2.addEventListener("click", function() {

    if (!gameOver) {
        scorePlayer2++;
        if (scorePlayer2 === winningScore) {
            displayHeader2.classList.add("winner");
            gameOver = true;
        }
        displayHeader2.textContent = scorePlayer2;
    }
    
});

inputPlayer.addEventListener("change", function() {
    playTo.textContent = inputPlayer.value;
    winningScore = Number(inputPlayer.value);
    reset();
});

resetButton.addEventListener("click", function() {
    reset();
}); 



function reset() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;

    displayHeader1.textContent = scorePlayer1;
    displayHeader2.textContent = scorePlayer2; 

    displayHeader1.classList.remove("winner");
    displayHeader2.classList.remove("winner");

    gameOver = false;
}