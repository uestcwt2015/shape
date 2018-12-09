/** 
 * @file init.js
 */
import Utils from "../utils";

export function initCanvas(el) {
  this.fc = new fabric.Canvas('canvas'); 
  this.target = el;
  // this.switchGround()
}

export function initEvent() {
  this.fc.on("mouse:down", options => {
    let pos = Utils.transformMouse(options.e.offsetX, options.e.offsetY);
    this.currentEvent = Object.assign(this.currentEvent, {
      from: {
        x: pos.x,
        y: pos.y
      }
    });

    this.isDrawing = true;
  });

  this.fc.on("mouse:move", options => {
    if (!this.isDrawing) return;

    let pos = Utils.transformMouse(options.e.offsetX, options.e.offsetY);
    this.currentEvent = Object.assign(this.currentEvent, {
      to: {
        x: pos.x,
        y: pos.y
      }
    });
    drawing();
  });

  this.fc.on("mouse:up", options => {
    let pos = Utils.transformMouse(options.e.offsetX, options.e.offsetY);
  });
}
