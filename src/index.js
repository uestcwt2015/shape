/** 
 * @file index.js
 */

import * as initHandles from "./basic/init";
import * as globalApis from "./basic/globalApi";

const Shape = function() {
  this.fc = null;
  this.target = null;
  this.grid = false;
  this.canvasArr = [];
  this.isDrawing = false;
  this.currentEvent = {};
}

for (let method in initHandles) {
  Shape.prototype[method] = initHandles[method];
}

for (let api in globalApis) {
  Shape.prototype[api] = globalApis[api];
}

var instance = new Shape();

window.Shape = instance;

instance.initCanvas(document.getElementById("canvas"));