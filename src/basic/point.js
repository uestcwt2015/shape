/* 
 * @file point.js
 */

class Point {
  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
  }

  setXPos(newVal) {
    this.x = newVal;
  }

  setYPos(newVal) {
    this.y = newVal;
  }
}

export default Point;