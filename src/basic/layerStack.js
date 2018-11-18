/** 
 * @file layer stack
*/

import Utils from "../utils";
/*
 * layer
 * id: number             图层id
 * type: string           操作名字
 * opts: object           参数
 * oldPos: number         栈中老位置
 * newPos: number         栈中新位置
 */ 

export default class {
  construstor() {
    this.stack = [];
    this.currId = 0;
  }
  
  /**
   * @func addLayer
   * @desc 添加新的图层
   * @param { Object } layer 待添加的新图层
   * @param { Number } pos   添加到的位置
   * @returns { Number }
   */
  addLayer(layer, pos) {
    // 生成新layer id
    if (!Utils.type.isNumber(layer.id) || layer.id <0) {
      layer.id = this.currId++;
    }
    // 默认添加在栈顶
    if (!Utils.type.isNumber(pos) || pos < 0) {
      layer.newPos = this.stack.length;
      layer.oldPos = this.stack.length;
      this.stack.push(layer);
      return layer.id;
    }
  
    for (let i = this.stack.length - 1; i > 0; i--) {
      const layer = this.stack[i];
      if (i >= pos) {
        layer.newPos++;
        layer.oldPos++;
        this.stack[i+1] = layer;
      }
    }

    this.stack[pos] = layer;
    return layer.id;
  }

  /**
   * @func removeLayer
   * @desc 移除栈中图层
   * @param { Number } id 待移除的图层id
   * @returns { Number }
   */
  removeLayer(id) {
    // 默认移除栈顶元素
    if (!Utils.type.isNumber(id) || id < 0) {
      return this.stack.pop().id;
    }

    let removeLayerPos = -1;
    for (let i = 0; i < this.stack.length; i++) {
      let layer = this.stack[i];
      if (layer.id === id) {
        removeLayerPos = layer.oldPos;
        continue;
      }

      if (removeLayerPos !== -1) {
        layer.oldPos--;
        layer.newPos--;
      }
    }

    return this.stack.splice(removeLayerPos, 1)[0].id;
  }

  /**
   * @func resetStack
   * @desc 重置栈
   * @param { Array } list   stack中的数据
   * @param { Number } maxId  stack中最大的id]
   * @returns { Null }
   */
  resetStack(list = [], maxId = 0) {
    this.stack = [...list];
    this.currId = maxId;
  }

  layerHoist(id) {
    
  }
}