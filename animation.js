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
        context.clearRect(0,0,width,height);

    }
    setup();
    height,
    width,

    ypos,
    window.addEventListener('change', getinput, false);


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
    #raf;

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
            this.#height -= 1;
        }else {
            this.timer += deltaTime;
        }
        if(this.#height<0){ cancelAnimationFrame(this.#raf); clear();
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