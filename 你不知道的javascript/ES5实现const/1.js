function _const(key, value) {    
  const desc = {        
      value,        
      writable: false    
  }    
  Object.defineProperty(window, key, desc)
}
  
_const('obj', {a: 1})   //定义obj
obj.b = 2               //可以正常给obj的属性赋值
obj = {}                //抛出错误，提示对象read-only
