
function setup() {
    createCanvas(400, 400)
   
}

function draw() {
    background(100, 0, 200)
    rectMode(CENTER)
    fill(50, 0, 255)
    
    let x = mouseX
    let y = mouseY
    
    if (mouseX < 25){
        x = 25;
    }
    else if (mouseX > width - 25){
        x = width - 25;
    }
    if (mouseY < 25){
        y = 25;
    }
    else if (mouseY > height - 25){
        y = height - 25;
    }

    square(x, y, 50)
    
    /*if (mouseX > width) {
        square(375, mouseY, 50)
    }
    else if (mouseX < width){
        square(25, mouseY, 50)
    }
     if (mouseY > height) {
        square(mouseX, 375, 50)
    }
    else if (mouseY < width){
        square(mouseX, 25, 50)
    }*/
}