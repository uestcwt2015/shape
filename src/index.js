/** 
 * @file index.js
 */

import * as initHandles from "./basic/init";
import * as globalApis from "./basic/globalApi";
import * as shapes from "./basic/shape";

const Shape = function() {
  this.fc = null;
  this.target = null;
  this.grid = false;
  this.canvasArr = [];
  this.isDrawing = false;
  this.currentEvent = {};
  this.currentType = "Rect";
  this.color = "rgba(0, 0, 0, 0)";
  this.bgColor = "rgba(255, 255, 255, 0)";
  this.lineWidth = 1;
  this.drawObject = null;
};

for (let method in initHandles) {
  Shape.prototype[method] = initHandles[method];
}

for (let api in globalApis) {
  Shape.prototype[api] = globalApis[api];
}

for (let shape in shapes) {
  Shape.prototype["draw" + shape] = shapes[shape];
}

var instance = new Shape();

window.Shape = instance;

instance.initCanvas(document.getElementById("canvas"));
instance.initEvents();