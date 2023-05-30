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

    static checkKeys(plrPos){
        if(keys["w"])plrPos.y -= PLR_SPEED;
        if(keys["s"])plrPos.y += PLR_SPEED;
        if(keys["a"])plrPos.x -= PLR_SPEED;
        if(keys["d"])plrPos.x += PLR_SPEED;
        if(keys[" "])marks.push(new Mark(plrPos.x, plrPos.y, COLORS[Mark.randomColor(0, COLORS.length - 1)], MARK_SIZE));
    }

    initKeyboard(keys){
        document.body.onkeydown = function(e){
            let key = e.key.toLowerCase();
            keys[key] = true;
        }
    
        document.body.onkeyup = function(e){
            let key = e.key.toLowerCase();
            keys[key] = false;
        }
    }
}