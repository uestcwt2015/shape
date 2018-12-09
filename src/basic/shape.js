/** 
 * @file shape.js
*/

/* 
  options: {
    startPos: Point,
    endPos: Point,
    lineWidth: int
    lineColor: string,
  }  
*/
// export function line(ctx, opts) {
//   const { startPos,  endPos, lineWidth=1, lineColor="#000" } = opts;
  
//   // move to begin
//   ctx.beginPath();
//   ctx.moveTo(startPos.x, startPos.y);

//   // draw line
//   ctx.lineWidth = lineWidth;
//   ctx.strokeStyle = lineColor;
//   ctx.lineTo(endPos.x, endPos.y);
//   ctx.stroke();

//   ctx.endPath();
// };

/* 
  options: {
    startPos: Point,
    endPos: Point,
    lineWidth: int,
    isFill: bool,
    lineColor: string,
    fillColor: string
  }  
*/
export function rect(opts) {
  const { startPos, endPos } = opts;

  let rect = new fabric.Rect({
    left: startPos.x,
    top: startPos.y,
    width: endPos.x - startPos.x,
    height: endPos.y - startPos.y
  });

  return rect;
}

/* 
  options: {
    center: Point,
    radius: int,
    startAngle: rad,
    endAngle: rad,
    anticlockwise: bool,
    lineWidth: int,
    isFill: bool,
    lineColor: string,
    fillColor: string
  }  
*/

export function circle(ctx, opts) {
  const { center,  radius } = opts;

  let circle = new fabric.Circle({
    left: center.x,
    top: center.y,
    radius: radius
  })
}