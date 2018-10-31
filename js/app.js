
// Enemies our player must avoid
var Enemy = function(x,y,velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
this.x = x;
this.y = y;
this.velocity = velocity;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    // Set the image of the enemy
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // which will ensure the game runs at the same speed for
    // all computers. 
     // You should multiply any movement by the dt parameter
    this.x +=  this.velocity * dt;
   // check for the area of the enemy will emerge from
    if (this.x > 510) {
    this.x = -50;
    this.velocity =  100 + Math.floor(Math.random() * 222);

    };
    // check for player(boy)  angle of distance
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
    };
};

// Draw the enemy on the screen, required method for game
// this brings the enemy in and they come into the stage
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y){
this.x = x;
this.y = y;
//set the image to a boy
this.player = 'images/char-boy.png';
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.update = function(dt) {

};

// here the image comes into the game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};
// here the user uses the keyboard to change positions either up down or left and right
Player.prototype.handleInput = function (keyPress) {

 if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };

     if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };

 if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };

     if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };

    if (this.y < 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 800);
    };
};

var allEnemies = [];

// Location of the 3 enemies on the y axis located on the stone road
var enemyStatus = [63, 147, 230];

enemyStatus.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
});

var player = new Player(202, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
