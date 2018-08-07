var colors = generateRandomColors(6);

var sqaures = document.getElementsByClassName("square");

var pickedColor = pickColor();
var colorDisplay = document.getElementById("displayColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < sqaures.length; i++) { 
    sqaures[i].style.background = colors[i];

    sqaures[i].addEventListener("click", function() {
        var clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
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
