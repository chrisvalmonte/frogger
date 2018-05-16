/*
 * Description: Constructor function for enemy objects that the player must avoid.
 */
var Enemy = function() {
    // Load the enemy's image
    this.sprite = 'images/enemy-bug.png';

    // Spawn the enemy off screen
    this.x = -100;

    // Valid Y coordinates for the enemy
    this.validYCoords = [60, 145, 230];

    // Set the enemy's randomly generated Y coordinate
    this.y = this.validYCoords[Math.floor(Math.random() * 3)];
};

/*
 * Description: Update the enemy's position across the screen and handle a
 * collision with a player.
 *
 * @param dt: The time delta between ticks.
 */
Enemy.prototype.update = function(dt) {
    this.x += 100 * dt;

    // Reset the enemy's location after it crosses the screen.
    if(this.x > 500) {
        this.x = -100;
        this.y = this.validYCoords[Math.floor(Math.random() * 3)];
    }

    // Reset the player's location after a collision with an enemy.
    if(this.collidedWithPlayer())
        player.setInitialCoords();
};

/*
 * Description: Draw the enemy on the screen.
 */
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.collidedWithPlayer = function() {
    return this.x >= player.x - 25 &&
      this.x <= player.x &&
      this.y === player.y;
}



/*
 * Description: Constructor function for player objects.
 */
var Player = function() {
    // Load the player's image
    this.sprite = 'images/char-boy.png';

    this.setInitialCoords();
};

/*
 * Description: Sets the player's initial location (bottom center).
 */
Player.prototype.setInitialCoords = function() {
    this.x = 200;
    this.y = 400;
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
                this.setInitialCoords();
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
var numEnemies = 1;
for (var i = 0; i < numEnemies; i++) {
    var enemy = new Enemy();
    allEnemies.push(enemy);
}



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
