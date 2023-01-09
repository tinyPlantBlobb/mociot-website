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
            inp.endanimation();
        });
        clear;
        //sets the canvas width and height to the new width and height of the window
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight - document.getElementById("fly").style.height -32;
        ypos = height;
        //resetting the text size 
        context.font="bold 2vw arial";
        
    }

    function clear() {
        context.clearRect(0,0,width,height);
    }

    setup();
    height,
    width,

    ypos,
    window.addEventListener('change', getinput, false);


function getinput(){
    //clear the current screen
    clear();
    //get the input field
    var inp = document.getElementById('input');
    let inputs = inp.value;
    //clear the input field
    inp.value = '';
    //create a new animation object
    input = new inputtext(context, inputs, height, width);
    //add animation obj. to list of all animated objects
    allinputs.push(input);
    console.log("animate");
    // let it move
    input.animate(0);
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

    #draw(y) {
        this.#ctx.textAlign="center";
        this.#ctx.fillText(this.#text, this.#center, y);
    }

    #clear(){
        this.#ctx.clearRect(0, (this.#height - this.#ctx.measureText(this.#text).actualBoundingBoxAscent) , this.#center*2, this.#txtheight + this.#speed );
    }

    animate(timestamp) {
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
// // audio control 
// togglevisibility.addEventListener ('click',
//     function() {           // anonyme Funktion
// 		btn = document.querySelector("#btn_visibility");
// 		snippets = document.querySelector("audioplayer");
// 		if (btn.innerHTML == "Hide"){
// 			snippets.style.visibility="hidden";
// 			btn.innerHTML = "None";
// 		} else if(btn.innerHTML == "None"){
// 			snippets.style.display = "none";
// 			btn.innerHTML = "Show";
// 		} else{
// 			btn.innerHTML = "Hide";
// 			snippets.style.display = "grid";
// 			snippets.style.visibility = "visible";
// 		}
//     }, 
//     true);