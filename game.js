// Creating variables
class Player{
    constructor(x_, y_, color_){
        this.x = x_;
        this.y = y_;
        this.color = color_;
    }
    move(dx, dy){
        this.x += dx;
        this.y += dy;
        if (this.x > 800){this.x = 800;}
        if (this.x < 0){this.x = 0;}
        if (this.y > 600){this.y = 600;}
        if (this.y < 0){this.y = 0;}
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI*2);
        context.fillStyle = this.color;
        context.fill();
    }
};
class Enemy2{
    constructor(x_, y_, color_){
        this.x = x_;
        this.y = y_;
        this.color = color_;
    }
    move(dx, dy){
        this.x += dx;
        this.y += dy;
        if (this.x > 800){this.x = 800;}
        if (this.x < 0){this.x = 0;}
        if (this.y > 600){this.y = 600;}
        if (this.y < 0){this.y = 0;}
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI*2);
        context.fillStyle = this.color;
        context.fill();
    }
};
class Enemy1{
    
    constructor(x_, y_, color_){
        this.x = x_;
        this.y = y_;
        this.color = color_;
    }

 move(dx, dy){
        this.x += dx;
        this.y += dy;
        if (this.x > 800){this.x = 800;}
        if (this.x < 0){this.x = 0;}
        if (this.y > 600){this.y = 600;}
        if (this.y < 0){this.y = 0;}
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, 20, 0, Math.PI*2);
        context.fillStyle = this.color
        context.fill()
    }
};

var enemy1 = 1
enemy1 = new Enemy1(200,100, "blue")

var player = 1;
player = new Player(400, 300, 'red');

var enemy2 = 1
enemy2 = new Enemy2(500, 500, "blue")

function update() {
    if (isKeyPressed[65]){player.move(-3, 0);}
    if (isKeyPressed[68]){player.move(3, 0);}
    if (isKeyPressed[83]){player.move(0, 3);}
    if (isKeyPressed[87]){player.move(0, -3);}
}   

function draw() {
    // This is how you draw a rectangle
    player.draw();
    enemy1.draw();
    enemy2.draw();
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
