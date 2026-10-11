
function setup() {
    createCanvas(400, 400);

}

function draw() {
   
    if (mouseIsPressed) {
    background(255, 0, 255);
    fill(0);
    circle(200, 200, 100);
    } 
    
    else {
        background(0);
        fill(255, 0, 255);
        circle(200, 200, 100)
    }

}