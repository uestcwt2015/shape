export function transformMouse(mouseX, mouseY) {
  return { x: mouseX / window.zoom, y: mouseY / window.zoom };
}