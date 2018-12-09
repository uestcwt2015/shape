/** 
 * @file globalApis
 */

const oImg = require("../assets/images/canvas_bg.jpg");
export function switchGround() {
  if (this.grid) {
    
  } else {
    fabric.Image.fromURL(oImg, img => {
      this.fc.add(img);
    });
  }
}