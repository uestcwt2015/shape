/** 
 * @file init.js
 */
import Utils from "../utils";

export function initCanvas(el) {
  this.fc = new fabric.Canvas('canvas'); 
  this.target = el;
  window.zoom = window.zoom ? window.zoom : 1;
  // this.switchGround()
}

export function initEvents() {
  if (!this.fc) return;
  // mousedown
  this.fc.on("mouse:down", options => {
    console.log(options);
    let pos = Utils.transformMouse(options.e.offsetX, options.e.offsetY);
    this.currentEvent = Object.assign(this.currentEvent, {
      from: {
        x: pos.x,
        y: pos.y
      }
    });
    console.log("drawing start")
    this.isDrawing = true;
  });

  // mousemove
  this.fc.on("mouse:move", options => {
    if (!this.isDrawing) return;
    if (this.drawObject) {
      this.fc.remove(this.drawObject);
    }

    let pos = Utils.transformMouse(options.e.offsetX, options.e.offsetY);
    this.currentEvent = Object.assign(this.currentEvent, {
      to: {
        x: pos.x,
        y: pos.y
      }
    });

    let drawObj = this["draw" + this.currentType]();
    this.drawObject = drawObj;
    this.fc.add(drawObj);
    console.log("drawing", this.currentEvent);
  });

  // mouseup
  this.fc.on("mouse:up", options => {
    let pos = Utils.transformMouse(options.e.offsetX, options.e.offsetY);
    this.currentEvent = Object.assign(this.currentEvent, {
      to: {
        x: pos.x,
        y: pos.y
      }
    });

    let drawObj = this["draw" + this.currentType]();
    this.drawObject = drawObj;
    this.fc.add(drawObj);
    console.log("drawing end", this.currentEvent);
    this.isDrawing = false;
  });
}
