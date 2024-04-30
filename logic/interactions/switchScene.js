import { resizeGame } from "../utils/resize";
import gameState from "../../data/gameState";
import Popup from "../popup";

// Switch between game scenes

function switchScene(app, newSceneName) {
  // hide wiki text
  document.getElementById("wiki-wrapper").style.display = "none";

  // Hide all scenes
  Object.values(app.scenes).forEach((scene) => (scene.visible = false));
  // Show the new scene
  const newSceneContainer = app.scenes[newSceneName];
  if (newSceneContainer) {
    newSceneContainer.visible = true;
    gameState.currentScene = newSceneName;
    // close all open popups when switching to a new scene
    Popup.activePopups.forEach((popup) => popup.closePopup());
    // Call resize to ensure scene matches current window size
    resizeGame(app, app.scenes[newSceneName]);
  } else {
    console.warn("Scene not found:", newSceneName);
  }
}

export default switchScene;
