var canvas = document.querySelector( 'canvas' );
    var context = canvas.getContext( '2d' );
    function setup() {

        resize();
        window.addEventListener( 'resize', resize );
        window.addEventListener('load', setup, false);
       
    }
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight -100;
    }
    setup();
height,
width,
 window.addEventListener('change', draw, false);




 function draw(){
//     //var contxt = (a canvas context);
    
    context.clearRect(0,0,width,height);

    
    context.font="bold 24px arial";
    
    context.textAlign="left";
    
//     .fillText(window.innerWidths, 0, 0);
    var inp = document.getElementById('input');
    let inputs = inp.value;
    
    canvas.font="bold 12px arial";
    // len = canvas.measureText(inputs).width;
    context.textAlign="left";
    // context.fillText(len, 0,0);
    context.fillText(inputs, width/2, height)
    inp.value = '';
 }


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