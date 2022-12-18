var canvas = document.querySelector( 'canvas' );
    var context = canvas.getContext( '2d' );
    function setup() {

        resize();
        window.addEventListener( 'resize', resize );
        window.addEventListener('load', setup, false);
        var inp = document.getElementById('input');
        inp.value = '';
       
    }
    
    function resize() {
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
    window.addEventListener('change', draw, false);


 function draw(){
    // var contxt = (a, canvas, context);
    clear();
    // 
    context.font="bold 24px arial";
    
    context.textAlign="left";
    

    var inp = document.getElementById('input');
    let inputs = inp.value;

    canvas.font="bold 12px arial";

    inp.value = '';
    render(inputs);

    // 
    
 }
function render(text) {
    clear();
    context.textAlign="center";
    context.fillStyle ="rgba(0,0,0,1)"
    context.fillText(text, (width/2), ypos);
    if(ypos>0){
        ypos = ypos -0.1;

    }
    // if(ypos<=0){
    //     window.requestAnimationFrame(raf);
    // }
    // raf = window.requestAnimationFrame(render(text));
}

//  let x = 50;
//  let y = 50;
//  let lastRender = Date.now();
//  function render() {
//    let delta = Date.now() - lastRender;
//    x += delta;
//    y += delta;
//    context.fillRect(x, y, x+10, y+10);
//    
//  }
//  render();


// audio control 
togglevisibility.addEventListener ('click',
    function() {           // anonyme Funktion
		btn = document.querySelector("#btn_visibility");
		snippets = document.querySelector("audioplayer");
		if (btn.innerHTML == "Hide"){
			snippets.style.visibility="hidden";
			btn.innerHTML = "None";
		} else if(btn.innerHTML == "None"){
			snippets.style.display = "none";
			btn.innerHTML = "Show";
		} else{
			btn.innerHTML = "Hide";
			snippets.style.display = "grid";
			snippets.style.visibility = "visible";
		}
    }, 
    true);