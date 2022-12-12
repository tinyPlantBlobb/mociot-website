
function initiate(){
    var elem=document.getElementById('canvas');
    canvas= elem.getContext('2d');
    window.addEventListener('resize', resize, false);
    width = innerWidth;
    height = outerHeight;
}

function resize(){
    width = innerWidth;
    height = innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.fillText(window.innerWidth, 300,300);
    canvas.fillRect(0,0,200,200);
    canvas.strokeStyle = "#000099";
    canvas.strokeRect(0,0,width,height);

}
function draw(){
    //var contxt = (a canvas context);
    canvas.clearRect(0,0,width,height);
    canvas.font="bold 12px arial";
    canvas.textAlign="start";
    canvas.fillText(window.innerWidths, 0, 0);
    var inp = document.getElementById('input');
    let inputs = inp.value;
    canvas.font="bold 12px arial";
    canvas.textAlign="start";
    canvas.fillText(inputs, 100, 100)
    inp.value = '';
}
window.addEventListener('load', initiate, false);

window.addEventListener('change', draw, false);
