let locationX = random(0, 400)
let locationY = random(0, 400)
let circleDiameter = random(10, 101)

function setup() {
    createCanvas(400, 400);
    noStroke();
    fill(255, 0, 150);
    background(0);
}

function draw() {

let locationX = random(0, 400)
let locationY = random(0, 400)
let circleDiameter = random(10, 101)


    if (mouseIsPressed) {
        //circle(width / 2, height / 2, width * 0.8);
        circle(locationX, locationY, circleDiameter)
    }

    if (keyIsPressed) {
        background(0);
    }
}