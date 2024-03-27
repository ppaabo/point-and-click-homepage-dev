function switchScene(app, newSceneName) {
  // Hide all scenes
  Object.values(app.scenes).forEach((scene) => (scene.visible = false));
  // Show the new scene
  const newSceneContainer = app.scenes[newSceneName];
  if (newSceneContainer) {
    newSceneContainer.visible = true;
  } else {
    console.warn("Scene not found:", newSceneName);
  }
}

export default switchScene;
