- sObject.setPrototypeOf(subClass, superClass)答案是用来继承父类的静态方法。这也是原来的继承方式疏忽掉的地方。
继承的最大问题在于：无法决定继承哪些属性，所有属性都得继承。


```
function drive(){
  console.log("wuwuwu!");
}
function music(){
  console.log("lalala!")
}
function addOil(){
  console.log("哦哟！")
}

let car = compose(drive, music, addOil);
let newEnergyCar = compose(drive, music);
```