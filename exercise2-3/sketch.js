let x = 0
let y = 0
function setup(){
    createCanvas(600, 400)
    
}

function draw(){
background(255);
circle(x, height / 2, 100);
if (x < width){
    x++
}

}