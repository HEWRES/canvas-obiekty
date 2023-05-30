const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const HEIGHT = 900;
const WIDTH = 1000;

const COLORS = ["pink", "purple", "gray", "green", "white", "orange", "yellow", "blue", "brown"];
const MARK_SIZE = 50;
const PLR_SIZE = 50;
const PART_SIZE = 20;
const PLR_COLOR = "red";
const PLR_SPEED = 5;
const PART_COLOR = "teal";
const STROKE_COLOR = "yellow";


let plrPos = {
    x: center(WIDTH, PLR_SIZE),
    y: center(HEIGHT, PLR_SIZE)
}

let keys = {};
let marks = [];
let pathParts = [];

function init(){
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
    let mark = new Mark();
    mark.initKeyboard(keys);
    let part = new Part();
    part.initMouse();
    update();
}

function update(){
    Mark.checkKeys(plrPos);
    let mark = new Mark();
    mark.initKeyboard(keys);
    requestAnimationFrame(update);
    render();
}

function render(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = PLR_COLOR;
    ctx.fillRect(plrPos.x, plrPos.y, PLR_SIZE, PLR_SIZE);

    for(let mark of marks){
        ctx.fillStyle = mark.color;
        ctx.fillRect(mark.x, mark.y, MARK_SIZE, MARK_SIZE);
    }

    for(let part of pathParts){
        ctx.fillStyle = part.color;
        ctx.fillRect(part.x, part.y, part.width, part.height);
    }

    if(pathParts.length > 1){
        ctx.beginPath();
        ctx.strokeStyle = STROKE_COLOR;
        ctx.moveTo(pathParts[0].x + PART_SIZE / 2, pathParts[0].y + PART_SIZE / 2);
        for(let part of pathParts){
            ctx.lineTo(part.x + PART_SIZE / 2, part.y + PART_SIZE / 2);
        }
        ctx.stroke();
    }
}

function center(containerSize, objSize){
    return containerSize / 2 - objSize / 2;
}