var canvas = document.querySelector( 'canvas' );
    var context = canvas.getContext( '2d' );
    let input;
    let raf;
    function setup() {

        resize();
        context.font="bold 30px arial";
        addGradient();
        context.textAlign="center";
        window.addEventListener( 'resize', resize );
        window.addEventListener('load', setup, false);
        var inp = document.getElementById('input');
        inp.value = '';
        clear();
    }

    function addGradient() {
        gradient = context.createLinearGradient((width/2), 0, width/2, height);
        gradient.addColorStop(1, 'black');
        gradient.addColorStop(0.3, "transparent");
        gradient.addColorStop(0, 'transparent');

        context.fillStyle = gradient;
    }

    function resize() {
        cancelAnimationFrame(raf);
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight -100;
        ypos = height;
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
    clear();
    x = width;
    var inp = document.getElementById('input');
    let inputs = inp.value;
    inp.value = '';
    input = new inputtext(context, inputs, height, width);
    console.log("animate");
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
        this.#ctx.fillText(this.#text, this.#center, y);
    }

    #clear(){
        // this.#ctx.fillStyle= "black";
        // this.#ctx.beginPath();
        // this.#ctx.rect(0, this.#height , this.#center*2, this.#height);
        this.#ctx.clearRect(0, (this.#height - this.#ctx.measureText(this.#text).actualBoundingBoxAscent) , this.#center*2, this.#txtheight + this.#speed );
        // this.#ctx.stroke();
    }

    animate(timestamp) {
        this.#clear();
        // const deltaTime = timestamp - this.lastime;
        // this.lastime = timestamp;
        // if(this.timer > this.intervall) {
        this.#draw(this.#height);
        
        this.#height -= this.#speed;
        // }else {
        //     this.timer += deltaTime;
        // }
        
        if(this.#height<0){ cancelAnimationFrame(this.#raf); this.#clear();
    }
        this.#raf = requestAnimationFrame(this.animate.bind(this));
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