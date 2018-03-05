var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById('colorDisplay');
var message = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var mode = document.querySelectorAll('.mode');

init();

function init() {

    modeButtons();
    setupSquares();
    reset();
}
function modeButtons() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener('click', function () {
            mode[0].classList.remove('selected');
            mode[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquares =3: numSquares =6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                resetButton.textContent = 'Play Again'
                message.textContent = 'Correct';
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = 'black';
                message.textContent = 'try again';
            }
            console.log(pickedColor, clickedColor);
        });
    }
}

function reset() {
    colors = getColorList(numSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = ''

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }
    resetButton.textContent = 'New Colors';
    h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function () {
    reset();
});



function changeColors(colors) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors;
    }
}

function randomColor() {
    var randColor = Math.floor(Math.random() * colors.length);
    return colors[randColor];
}

function getColorList(num) {
    var colorList = [];
    for (var i = 0; i < num; i++) {
        colorList.push(getRandomColors());
    }
    return colorList;
}

function getRandomColors() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return 'rgb('+ red +', '+ green + ', '+ blue +')';
}
