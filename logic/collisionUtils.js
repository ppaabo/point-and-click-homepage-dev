// Checks for collision between a player and an item
export function playerCollides(player, solidObjects) {
    // Initialize default values
    let collisionResult = {
        collided: false,
        direction: null
    };
    const playerBounds = player.getBounds();

    // Loop through each solid object
    for (const object of solidObjects) {
        // Create footprint instead of rectangle
        const itemBounds = object.getBounds();

        // Calculate the top and bottom y-coordinates of the footprint
        const footprintTop = itemBounds.y;
        const footprintBottom = itemBounds.y + 20; // Adjust the height as needed for the footprint

        // Check if the player is moving upward and is within a certain range below the item's footprint
        const approachingFromBelow = playerBounds.y < footprintTop && playerBounds.y + playerBounds.height >= footprintTop - 10;

        // Check if there is a collision along the x-axis
        const collisionX = playerBounds.x < itemBounds.x + itemBounds.width
            && playerBounds.x + playerBounds.width > itemBounds.x;

        // Check if there is a collision along the y-axis
        const collisionY = approachingFromBelow;

        if (collisionX && collisionY) {
            // Determine the collision direction based on overlap along x and y axes
            const xOverlap = Math.min(playerBounds.x + playerBounds.width - itemBounds.x, itemBounds.x + itemBounds.width - playerBounds.x);
            const yOverlap = Math.min(playerBounds.y + playerBounds.height - footprintTop, footprintBottom - playerBounds.y);

            if (xOverlap < yOverlap) {
                collisionResult.direction = playerBounds.x < itemBounds.x ? 'left' : 'right';
            } else {
                collisionResult.direction = playerBounds.y < footprintTop ? 'up' : 'down';
            }
            // Set collided to true and exit the loop
            collisionResult.collided = true;
            break;
        }
    }
    return collisionResult;
}

export const directionFunctions = {
    'left': (player, value) => player.x -= value,
    'right': (player, value) => player.x += value,
    'up': (player, value) => player.y -= value,
    'down': (player, value) => player.y += value
};
