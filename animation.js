var canvas = document.querySelector( 'canvas' );
    var context = canvas.getContext( '2d' );
    let input;
    let raf;
    var allinputs= [];
    
    function setup() {
        resize();
        //sets the fill sytle of the Text
        addGradient();
        context.textAlign="center";

        window.addEventListener( 'resize', resize );
        window.addEventListener('load', setup, false);
        //initialising the input field and setting the value to an empty string
        var inp = document.getElementById('input');
        inp.value = '';
        clear();
    }

    function addGradient() {
    
        gradient = context.createLinearGradient((width/2), 0, width/2, height);
        //lets the text fade into transparency when it reaches the top of the page
        gradient.addColorStop(1, 'black');
        gradient.addColorStop(0.3, "transparent");
        gradient.addColorStop(0, 'transparent');
        context.fillStyle = gradient;
    }

    function resize() {
        //ends the current animations for each input still going
        allinputs.forEach(inp => {
            inp.updatewidth();
            inp.endanimation();
        });
        clear;
        //sets the canvas width and height to the new width and height of the window
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight - document.getElementById("start").style.height 
        - document.getElementById('input').style.height-32;
        ypos = height;
        //resetting the text size 
        context.font="bold 2vw arial";
        if(width < 960){
            context.font="bold 1em arial";
        }
        //reset gradient
        addGradient();
        
    }

    function clear() {
        context.clearRect(0,0,width,height);
    }

    setup();
    height,
    width,

    ypos,
    window.addEventListener('change', getinput, false);
    stars = [];

function getinput(){

    //get the input field
    var inp = document.getElementById('input');
    let inputs = inp.value;
    //clear the input field
    inp.value = '';

    //create a new animation object for each part of the input that is wide enough for the screen
    if(context.measureText(inputs).width > width){
        lines = getLines(inputs);
        for(var i = 0; i <lines.length; i++){
            str = lines[i];
            input = new inputtext(context, lines[i], height + 
                (context.measureText(str).actualBoundingBoxAscent 
                +context.measureText(str).actualBoundingBoxDescent)*i, 
                width);
            allinputs.push(input);
            input.animate();
        }
    } else {
        input = new inputtext(context, inputs, height, width);
        //add animation obj. to list of all animated objects
        allinputs.push(input);
        // let it move
        input.animate(0)
        };
    addStar();
    
}

function getLines(text) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = words[0];

    for (var i = 1; i < words.length; i++) {
        var word = words[i];
        var wdt = context.measureText(currentLine + " " + word).actualBoundingBoxLeft
            +context.measureText(currentLine + " " + word).actualBoundingBoxRight;
        if (wdt < width) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    console.log(lines);
    return lines;
}

function addStar() {
    xpos = Math.floor(Math.random()*width);
    ypos = Math.floor(Math.random()*(height/2));
    var star = new Star(xpos, ypos, context);
    stars.push(star);
    star.animate();
}

class Star{
    #xpos;
    #ypos;
    #ctx;
    #brighness;
    #raf;
    #size;
    #bright;

    constructor(xpos,ypos, ctx){
        this.#xpos = xpos;
        this.#ypos = ypos;
        this.#ctx = ctx;
        this.#brighness = 1;
        this.#bright= 0.05;
        this.#size = 5;

    }

    draw(){
        this.#ctx.strokeStyle =  `rgba(255,255,77,${this.#brighness} )`;
        this.#ctx.beginPath();
        this.#ctx.moveTo(this.#xpos, this.#ypos);
        this.#ctx.lineTo(this.#xpos + this.#size, this.#ypos);
        this.#ctx.lineTo(this.#xpos - this.#size, this.#ypos);
        this.#ctx.lineTo(this.#xpos , this.#ypos);
        this.#ctx.lineTo(this.#xpos , this.#ypos+ this.#size);
        this.#ctx.lineTo(this.#xpos , this.#ypos- this.#size);
        this.#ctx.stroke();
        
    }

    animate(){
        this.draw();
        this.#brighness += this.#bright;
        if(this.#brighness <= 0 || this.#brighness >=1){
            this.#bright = -this.#bright;
        }
        this.#raf = requestAnimationFrame(this.animate.bind(this));
    }
}


class inputtext{
    #ctx;
    #text;
    #height;
    #center;
    #raf;
    #txtheight;
    #speed;

    constructor(ctx, input, height, width) {
        this.#ctx = ctx;
        this.#text = input;
        this.#height= height;
        this.#center = width/2;
        this.#txtheight  = ctx.measureText(input).actualBoundingBoxAscent + ctx.measureText(input).actualBoundingBoxDescent;
        this.lastime = 0;
        this.timer = 0;
        this. intervall = 1000/60;
        this.h = height;
        this.#speed = 3;
    }

    updatewidth(){
        this.#txtheight  = this.#ctx.measureText(input).actualBoundingBoxAscent + this.#ctx.measureText(input).actualBoundingBoxDescent;

    }

    #draw(y) {
        this.#ctx.textAlign="center";
        this.#ctx.fillText(this.#text, this.#center, y);
    }

    #clear(){
        this.#ctx.clearRect(this.#center-(this.#ctx.measureText(this.#text).actualBoundingBoxLeft +1), 
            this.#height - this.#ctx.measureText(this.#text).actualBoundingBoxAscent -1, 
            this.#center+this.#ctx.measureText(this.#text).actualBoundingBoxLeft +1, 
            this.#txtheight + this.#speed*2);
    }

    animate() {
        this.#clear();

        this.#draw(this.#height);
        
        this.#height -= this.#speed;

        if(this.#height<0){
            this.endanimation();
    }
        this.#raf = requestAnimationFrame(this.animate.bind(this));
    }

    endanimation(){
        cancelAnimationFrame(this.#raf); 
        this.#clear();
        allinputs.splice(allinputs.indexOf(this),1);
    }

}
