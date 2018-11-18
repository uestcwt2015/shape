/** 
 * @file type-check
*/

export function isNumber(val) {
  return Object.prototype.toString.call(val) === "[object Number]";
}