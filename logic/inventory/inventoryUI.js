import { Container, Graphics, Sprite, Point, Rectangle } from "pixi.js";
import gameState from "../../data/gameState";
import openPopup from "../interactions/openPopup";
import Player from "../player";

class InventoryUI {
  static container = new Container();
  static app = null;

  static initialize(app) {
    this.app = app;
    this.container.x = window.innerWidth - 20;
    this.container.y = 20;
    this.app.stage.addChild(this.container);

    window.addEventListener("resize", () => this.adjustPosition());
  }

  static adjustPosition() {
    // Update the position only if the window width is less than 1400 or choose the smaller between 1400 and window.innerWidth
    if (this.app) {
      const maxScreenWidth = Math.min(1400, window.innerWidth);
      this.container.x = maxScreenWidth - 20;
    }
  }

  static updateInventoryUI() {
    const BG_WIDTH = 80;
    const BG_HEIGHT = 80;

    const items = gameState.inventory.getItems();
    this.container.removeChildren();

    items.forEach((entry, index) => {
      const itemContainer = new Container();

      // create a new sprite for the item in the inventory
      const itemSprite = new Sprite(entry.sprite.texture);

      // Calculate the scale factor to fit the sprite within the background dimensions
      const scaleX = (BG_WIDTH - 20) / itemSprite.texture.width;
      const scaleY = (BG_HEIGHT - 20) / itemSprite.texture.height;
      const scale = Math.min(scaleX, scaleY); // Use the smaller scale factor to ensure fit
      itemSprite.scale.set(scale, scale);

      // After scaling, recalculate the sprite's x and y to center it
      itemSprite.x = (BG_WIDTH - itemSprite.width) / 2; // Center horizontally
      itemSprite.y = (BG_HEIGHT - itemSprite.height) / 2; // Center vertically

      const bg = new Graphics();
      bg.beginFill("#020D26", 0.9);
      bg.lineStyle(2, "#F54483");
      bg.drawRect(0, 0, BG_WIDTH, BG_HEIGHT);
      bg.endFill();

      itemContainer.addChild(bg);
      itemContainer.addChild(itemSprite);

      itemContainer.eventMode = "static";
      // itemContainer.buttonMode = true;
      itemContainer.cursor = "pointer";
      itemContainer.on("pointerdown", () =>
        this.onItemClicked(itemContainer, entry, index)
      );
      this.makeItemDraggable(itemContainer, entry);
      // Set the position of each item container within the main container
      itemContainer.x = -BG_WIDTH; // Reset this if needed to align correctly
      itemContainer.y = index * (BG_HEIGHT + 20); // Stack items vertically

      this.container.addChild(itemContainer);
      this.adjustPosition();
    });
  }

  static onItemClicked(itemContainer, entry, index) {
    console.log(`Item clicked: ${entry.item}, at index: ${index}`);
  }

  static makeItemDraggable(itemContainer, entry) {
    if (entry.item !== "Coffee") {
      return;
    }
    const player = Player.player;
    let draggedItem = null;

    const onDragMove = (event) => {
      if (draggedItem) {
        this.app.mainScene.toLocal(
          event.data.global,
          null,
          draggedItem.position
        );
      }
    };

    const onDragEnd = (event) => {
      if (draggedItem) {
        // A rectangle to represent the coffee maker's bounds
        let coffeeMakerBounds = new Rectangle(
          this.app.coffeeMaker.sprite.x - this.app.coffeeMaker.sprite.width / 2,
          this.app.coffeeMaker.sprite.y - this.app.coffeeMaker.sprite.height,
          this.app.coffeeMaker.sprite.width,
          this.app.coffeeMaker.sprite.height
        );
        if (coffeeMakerBounds.contains(draggedItem.x, draggedItem.y)) {
          checkDistance();
        }
        this.app.mainScene.removeChild(draggedItem);
        draggedItem = null;
        // Remove the pointermove event listener from the mainScene
        this.app.mainScene.off("pointermove", onDragMove);
      }
    };

    const onDragStart = (event) => {
      if (this.app.mainScene.visible) {
        draggedItem = new Sprite(entry.sprite.texture);
        draggedItem.anchor.set(0.5);
        draggedItem.alpha = 0.6;
        this.app.mainScene.toLocal(
          event.data.global,
          null,
          draggedItem.position
        );
        this.app.mainScene.addChild(draggedItem);

        this.app.mainScene.on("pointermove", onDragMove);
      }
    };
    // Add event listeners to the itemContainer
    itemContainer.on("pointerup", onDragEnd);
    itemContainer.on("pointerupoutside", onDragEnd);
    itemContainer.on("pointerdown", onDragStart);
    // To check if the player is close enough to the coffee maker
    const checkDistance = () => {
      if (!player) return;
      const distance = Math.sqrt(
        (player.x - this.app.coffeeMaker.sprite.x) ** 2 +
          (player.y - this.app.coffeeMaker.sprite.y) ** 2
      );
      const maxDistance = 250;
      if (distance <= maxDistance) {
        if (gameState.inventory.itemExists("Coffee cup")) {
          openPopup(this.app, "Nyt tulee tujut kahvit!");
        } else {
          openPopup(this.app, "Tuleepas tujut kahvit, mutta kuppi puuttuu...");
        }
      } else {
        openPopup(this.app, "En aivan ylety kahvinkeittimeen.");
      }
    };
  }
}

export default InventoryUI;
