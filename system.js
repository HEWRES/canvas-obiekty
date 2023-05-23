const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const HEIGHT = 900;
const WIDTH = 1000;

const COLORS = ["pink", "purple", "gray", "green", "white", "orange", "yellow", "blue", "brown"];
const PLR_SIZE = 50;
const MARK_SIZE = 50;
const PLR_COLOR = "red";
const PLR_SPEED = 5;

let plrPosX = center(WIDTH, PLR_SIZE);
let plrPosY = center(HEIGHT, PLR_SIZE);

let keys = {};
let marks = [];

function init(){
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    initKeyboard();
    update();
}

function update(){
    checkKeys();
    requestAnimationFrame(update);
    render();
}

function render(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = PLR_COLOR;
    ctx.fillRect(plrPosX, plrPosY, PLR_SIZE, PLR_SIZE);
    for(let mark of marks){
        ctx.fillStyle = mark.color;
        ctx.fillRect(mark.x, mark.y, MARK_SIZE, MARK_SIZE);
    }
}

function center(containerSize, objSize){
    return containerSize / 2 - objSize / 2;
}

function initKeyboard(){
    document.body.onkeydown = function(e){
        let key = e.key.toLowerCase();
        keys[key] = true;
    }

    document.body.onkeyup = function(e){
        let key = e.key.toLowerCase();
        keys[key] = false;
    }
}

function checkKeys(){
    if(keys["w"])plrPosY -= PLR_SPEED;
    if(keys["s"])plrPosY += PLR_SPEED;
    if(keys["a"])plrPosX -= PLR_SPEED;
    if(keys["d"])plrPosX += PLR_SPEED;
    if(keys[" "])marks.push(new Mark(plrPosX, plrPosY, COLORS[Mark.randomColor(0, COLORS.length - 1)], MARK_SIZE));
}

class Mark{
    constructor(x, y, color, markSize){
        this.x = x;
        this.y = y;
        this.color = color;
        this.markSize = markSize;
    }
   static randomColor(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}