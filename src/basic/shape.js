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
function line(ctx, opts) {
  const { startPos,  endPos, lineWidth=1, lineColor="#000" } = opts;
  
  // move to begin
  ctx.beginPath();
  ctx.moveTo(startPos.x, startPos.y);

  // draw line
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.lineTo(endPos.x, endPos.y);
  ctx.stroke();

  ctx.endPath();
};

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
function rect(ctx, opts) {
  const { startPos,  endPos, lineWidth=1, isFill=false, lineColor="#000", fillColor="#fff" } = opts;

  ctx.lineWidth = lineWidth;
  
  // calculate width and height
  let width = endPos.x - startPos.x;
  let height = endPos.y - startPos.y;

  // draw rect
  if (isFill) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(startPos.x, startPos.y, width, height);
  } else {
    ctx.strokeStyle = lineColor;
    ctx.strokeRect(startPos.x, startPos.y, width, height);
  }
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

function circle(ctx, opts) {
  const { center,  radius, startAngle=0, endAngle=2*Math.PI, anticlockwise=true, lineWidth=1, isFill=false, lineColor="#000", fillColor="#fff" } = opts;

  ctx.lineWidth = lineWidth;

  // draw circle
  ctx.arc(center.x, center.y, radius, startAngle, endAngle, anticlockwise);

  // fill or stroke
  if (isFill) {
    ctx.fillStyle = fillColor;
    ctx.fill();
  } else {
    ctx.strokeStyle = lineColor;
    ctx.stroke();
  }
}