/*
 * Description: Constructor function for enemy objects that the player must avoid.
 *
 * @param x: The generated X coordinate that the enemy will spawn on.
 * @param y: The generated Y coordinate that the enemy will spawn on.
 */
var Enemy = function(x, y) {
    // Load the enemy's image
    this.sprite = 'images/enemy-bug.png';

    // Set the enemy's generated location
    this.posX = x;
    this.posY = y;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    return Math.ceil(Math.random() * 5) * dt;
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
    this.x = 200;
    this.y = 400;
};

/*
 * Description: Handles a collision with an enemy.
 */
Player.prototype.update = function() {
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
            if(this.x === 0) // left boundary
                return;
            this.x -= 100;
            break;
        case 'right':
            if(this.x === 400) // right boundary
                return;
            this.x += 100;
            break;
        case 'up':
            if(this.y === 60) { // top boundary
                // Reset the player's position after he/she reaches the water
                this.x = 200;
                this.y = 400;
                return;
            }
            this.y -= 85;
            break;
        case 'down':
            if(this.y == 400) // bottom boundary
                return;
            this.y += 85;
            break;
    }
};



// Instantiate a new player
var player = new Player();

// Instantiate all enemies
var allEnemies = [];



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
