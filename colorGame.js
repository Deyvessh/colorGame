var numSquares = 6;

var colors = generateRandomColors(numSquares);

var sqaures = document.getElementsByClassName("square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("displayColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";

    for (var i = 0; i < sqaures.length; i++) {
        if (colors[i]) {
            sqaures[i].style.background = colors[i];
        } else {
            sqaures[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";

});

hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    
    messageDisplay.textContent = "";

    for (var i = 0; i < sqaures.length; i++) {
        sqaures[i].style.background = colors[i];
        sqaures[i].style.display = "block"; 
    }
    h1.style.background = "steelblue";

});

resetButton.addEventListener("click", function() {

    colors = generateRandomColors(numSquares);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    messageDisplay.textContent = "";

    for (var i = 0; i < sqaures.length; i++) {
        sqaures[i].style.background = colors[i]; 
    }

    h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < sqaures.length; i++) { 
    sqaures[i].style.background = colors[i];

    sqaures[i].addEventListener("click", function() {
        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    }); 
}

function changeColors(colors) {
    for (var i = 0; i < sqaures.length; i++) {
        sqaures[i].style.background = colors;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {

        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {

   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}
