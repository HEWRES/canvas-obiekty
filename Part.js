class Part{
    constructor(x, y, width, height){
        this.x = x - PART_SIZE / 2;
        this.y = y - PART_SIZE / 2;
        this.width = width;
        this.height = height;
        this.color = PART_COLOR;
    }

    initMouse(){
        canvas.onclick = function (e){
            let x = e.clientX - canvas.offsetLeft;
            let y = e.clientY - canvas.offsetTop;
            pathParts.push(new Part(x, y, PART_SIZE, PART_SIZE));
        }
    }
}