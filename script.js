let canvas = document.getElementById("gameCanvas");

let canvasWidth = document.getElementById("canvasWidth").valueAsNumber;
let canvasHeight = document.getElementById("canvasHeight").valueAsNumber;
let sqsize = 50;
canvas.width = canvasWidth * sqsize;
canvas.height = canvasHeight * sqsize;

let context = canvas.getContext("2d");

let herox = 1;
let heroy = 2;
let img = new Image();
img.src = "pachki.png";

let pachkix = Math.floor(Math.random() * canvasWidth);
let pachkiy = Math.floor(Math.random() * canvasHeight);
console.log(pachkix + " " + pachkiy);
let itm = new Image();
itm.src = "chechenec.jpg";

function drawMapAndHero() {
    context.fillStyle = "white";
    context.fillRect(0, 0, canvasWidth * sqsize, canvasHeight * sqsize);
    context.drawImage(itm, herox * sqsize, heroy * sqsize, sqsize, sqsize);
    context.drawImage(img, pachkix * sqsize, pachkiy * sqsize, sqsize, sqsize);
    for (let i = 0; i < canvasWidth * sqsize; i++) {
        for (let j = 0; j < canvasHeight * sqsize; j++) {
            context.strokeRect(i * sqsize, j * sqsize, sqsize, sqsize);
        }
    }
}
drawMapAndHero();

canvas.onclick = function(e) {
    let mousePosX = e * x - e.originalTarget.offsetLeft;
    let mousePosy = e * y - e.originalTarget.offsetTop;
    herox = Math.floor(mousePosX / sqsize);
    herox = Math.floor(mousePosY / sqsize);

    //drawMapAndHero();
    //if (herox === packix && heroy === pachkiy) {
    //output.innerText = "69";
}

function moveUp() {
    heroy--
    if (herox === pachkix && heroy === pachkiy) {
        pachkix = -1;
        pachkiy = -1;
    }
    drawMapAndHero();
}

function moveDown() {
    heroy++
    if (herox === pachkix && heroy === pachkiy) {
        pachkix = -1;
        pachkiy = -1;
    }
    drawMapAndHero();
}

function moveLeft() {
    herox--
    if (herox === pachkix && heroy === pachkiy) {
        pachkix = -1;
        pachkiy = -1;
    }
    drawMapAndHero();
}

function moveRight() {
    herox++
    if (herox === pachkix && heroy === pachkiy) {
        pachkix = -1;
        pachkiy = -1;
    }
    drawMapAndHero();
}

document.onkeypress = function(e) {
    let key = e.key;
    switch (key) {
        case "w":
            moveUp();
            break;
        case "s":
            moveDown();
            break;
        case "a":
            moveLeft();
            break;
        case "d":
            moveRight();
            break;
    }
}