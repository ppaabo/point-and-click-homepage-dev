import * as PIXI from "pixi.js";
import { playerCollides, directionFunctions } from "./collisionUtils";
import Player from "./player";
import Inventory from "./inventory";
import UI from "./UI";
import Numpad from "./numpad";
import Popup from "./popup.js";
import { setupPdf } from "./utils/pdfUtils.js";
import { resizeGame } from "./utils/resize.js";
import { followPlayer } from "./utils/cameraUtils.js";
import { introTextElements } from "../data/popupTexts.js";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
// isMobile = true enables the cameraContainer
window.isMobile = windowWidth <= 800;

// Create application on page load. desktop: 1400x800, mobile: use screensize
const app = new PIXI.Application({
  width: window.isMobile ? Math.min(windowWidth, 1400) : 1400,
  height: window.isMobile ? Math.min(windowHeight, 800) : 800,
  backgroundColor: 0xaaaaaa,
});

globalThis.__PIXI_APP__ = app;
document.getElementById("game-container").appendChild(app.view);

document.getElementById("hide-wiki-content").addEventListener("click", () => {
  document.getElementById("wiki-wrapper").style.display = "none";
});

// Construct contents in canvas
const ui = new UI(app);
const player = new Player(app);
const inventory = new Inventory(app);
const introPopup = new Popup(app, introTextElements);
const numpad = new Numpad(app, ui);

function getItemAtPosition(position, item) {
  // Check if the click is on the item. Ensure item is visible to not block movement after item is picked
  if (
    item instanceof PIXI.Sprite &&
    item.getBounds().contains(position.x, position.y) &&
    item.visible
  ) {
    return item;
  }
  return null;
}

// Handle click event on the stage
app.mainScene.eventMode = "static"; // Enable interaction
app.mainScene.on("pointertap", (event) => {
  // console.log(app.mainScene.toLocal(event.global));
  const collisionResult = playerCollides(Player.player, UI.solidObjects);
  if (collisionResult.collided) {
    const direction = collisionResult.direction;
    // Set the player position next to the object based on collision direction
    const moveFunction = directionFunctions[direction];
    if (moveFunction) {
      moveFunction(Player.player, 20); // Adjust the value as needed
    }
  }
  const clickedItem = getItemAtPosition(event.global, event.target);
  // console.log("Clicked item " + clickedItem);
  // Set the new target position on click
  // TODO: 502 is set as the y-coordinate just to test the 2.5D-effect. This
  // has to be adjusted in a different way once final designs are done.
  const localPosition = app.mainScene.toLocal(event.global);
  const yCoordinate = localPosition.y > 603 ? localPosition.y : 602;
  const targetPosition = new PIXI.Point(localPosition.x, yCoordinate);
  player.targetPosition = targetPosition;
  // If a item is not clicked, clear the pending action and checkDistanceParams. (To ensure unecceary actions are not performed)
  if (!clickedItem) {
    console.log("Item was not clicked, empty action");
    Player.player.pendingAction = null;
    Player.player.checkDistanceParams = null;
  }
});

// Main game loop
app.ticker.add((delta) => {
  // if (player.targetPosition) {
  //   const distance = Math.sqrt(
  //     Math.pow(Player.player.x - player.targetPosition.x, 2) +
  //       Math.pow(Player.player.y - player.targetPosition.y, 2)
  //   );
  //   if (distance < 3) {
  //     player.setIdle();
  //   }
  // }
  if (player.targetPosition) {
    player.move(player.targetPosition, UI.solidObjects);
    followPlayer(app, app.cameraContainer, Player.player);
    app.mainScene.updateTransform();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // Set initial camera position on mobile, or resize to window size
  if (window.isMobile) {
    introPopup.open(app, 0.2, 0.2);
  } else {
    introPopup.open(app, 0.37, 0.4);
  }
  followPlayer(app, app.cameraContainer, Player.player);
  resizeGame(app, app.mainScene);
});
window.addEventListener("resize", () => {
  for (let sceneName in app.scenes) {
    resizeGame(app, app.scenes[sceneName]);
  }
});

document.addEventListener("fullscreenchange", () => {
  for (let sceneName in app.scenes) {
    resizeGame(app, app.scenes[sceneName]);
  }
});

// window.addEventListener("resize", () => resizeGame(app, app.pdfContainer));
// }
// setupPdf(app, app.mainScene);
