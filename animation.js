var canvas = document.querySelector( 'canvas' );
    var context = canvas.getContext( '2d' );
    let input;
    let raf;
    function setup() {

        resize();
        context.font="bold 30px arial";
        
        context.textAlign="center";
        window.addEventListener( 'resize', resize );
        window.addEventListener('load', setup, false);
        var inp = document.getElementById('input');
        inp.value = '';
    }
    
    function resize() {
        cancelAnimationFrame(raf);
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight -100;
        ypos = height;
    }

    function clear() {
        context.fillStyle="rgba(255, 255, 255, 0.03)";
        context.fillRect(0,0,width,height);
        // context.clearRect(0,0,width,height);
    }
    setup();
    height,
    width,

    ypos,
    window.addEventListener('change', getinput, false);


 function draw(input){
    clear();
    context.strokeText(input, width/2, ypos);
    context.fillRect(x, ypos, x -10, ypos-10);
    changepos();
 }

function changepos(){
    if(ypos >= 0) {
        x = x-10;
        ypos = ypos-100;
    }
    
    cancelAnimationFrame(raf);
}
function getinput(){
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

    constructor(ctx, input, height, width) {
        this.#ctx = ctx;
        this.#text = input;
        this.#height= height;
        this.#center = width/2;
        this.lastime = 0;
        this.timer = 0;
        this. intervall = 1000/60;
    }

    #draw(y) {
        this.#ctx.fillText(this.#text, this.#center, y);
    }
    animate(timestamp) {
        const deltaTime = timestamp - this.lastime;
        this.lastime = timestamp;
        if(this.timer > this.intervall) {
            this.#draw(this.#height);
            this.#height -= 10;
        }else {
            this.timer += deltaTime;
        }
        if(this.#height<0){ cancelAnimationFrame(raf);
    }
        raf = requestAnimationFrame(this.animate.bind(this));
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