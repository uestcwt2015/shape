/** 
 * @file index.js
 */

// import * as draw from "./basic/shape";
// import Point from "./basic/point";
const fabric = require("fabric");
var fc = null;

function init(el) {
  fc = new fabric.Canvas('canvas');
  console.log(fc);
  // addEventToCanvas(el, "rect");
}

function addEventToCanvas(el, type) {
  let startPoint = null;
  let endPoint = null;

  const ctx = el.getContext("2d");

  el.addEventListener("mousedown", e => {
    startPoint = new Point(e.x, e.y);
  });

  el.addEventListener("mousemove", e => {
    if (!startPoint) return;
    draw[type](ctx, {
      startPos: startPoint, 
      endPos: {
        x: e.x,
        y: e.y
      }
    });
  });

  el.addEventListener("mouseup", e => {
    endPoint = new Point(e.x, e.y);
    console.log(startPoint, endPoint);
    draw[type](ctx, {
      startPos: startPoint, 
      endPos: endPoint
    });
    startPoint = null;
    endPoint = null;
  });
}

init(canvas);