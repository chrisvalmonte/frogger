// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



/*
 * Description: Constructor function for player objects.
 */
var Player = function() {
    // Load the player's image
    this.sprite = 'images/char-boy.png';

    // Set the player's initial location (bottom center)
    this.posX = 300;
    this.posY = 100;
};

/*
 * Description: Handles a collision with an enemy.
 */
Player.prototype.update = function() {
    // Reset the player's location after a collision with an enemy
    this.posX = 300;
    this.posY = 100;
};

/*
 * Description: Draws the player on the screen.
 */
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
 * Description: This function handles the player's arrow key function events.
 *
 * @param key: The arrow key pressed.
 */
Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'left':
            if(this.posX === 100) // left boundary
              return;
            this.posX -= 100;
            break;
        case 'up':
            if(this.posY === 500) // top boundary
              return;
            this.posY += 100;
            break;
        case 'right':
            if(this.posX === 500) // right boundary
              return;
            this.posX += 100;
            break;
        case 'down':
            if(this.posY === 100) // bottom boundary
              return;
            this.posY -= 100;
            break;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
