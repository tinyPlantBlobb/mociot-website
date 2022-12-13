var canvas = document.querySelector( 'canvas' );
var context = canvas.getContext( '2d' );
function setup() {

    resize();
    window.addEventListener( 'resize', resize );
}
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
setup();


//  var cnvs=document.querySelector('canvas');
// var cxt= cnvs.getContext('2d');
// height,
// width,


// function initiate(){
//     resize();
//     window.addEventListener('load', initiate, false);
//     window.addEventListener('change', draw, false);
//     window.addEventListener('resize', resize );
// }

// function resize(){

//     heigth = cxt.height = window.innerHeight;

//     width = cxt.width = window.innerWidth;
    
    
    
    
//     cxt.fillText(window.innerWidth, 300,300);
    
//     cxt.fillRect(0,0,200,200);
    
//     cxt.strokeStyle = "#000099";
    
//     cxt.strokeRect(0,0,width,height);

// }
// function draw(){
//     //var contxt = (a canvas context);
    
//     cxt.clearRect(0,0,width,height);
    
//     cxt.font="bold 12px arial";
    
//     cxt.textAlign="start";
    
//     cxt.fillText(window.innerWidths, 0, 0);
//     var inp = document.getElementById('input');
//     let inputs = inp.value;
    
//     cxt.font="bold 12px arial";
    
//     cxt.textAlign="start";
    
//     cxt.fillText(inputs, 100, 100)
//     inp.value = '';
// }


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