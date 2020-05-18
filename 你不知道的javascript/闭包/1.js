// for (var i = 1; i <= 5; i++) {
//   (function(j) {
//     setTimeout( function timer() {
//       console.log(j)
//     }, j*1000)
//   })(i)
// }


// for (var i = 1; i <= 5; i++) {
//     let j = i
//     setTimeout( function timer() {
//       console.log(j)
//     }, j*1000)
// }


var a = 1
function f1() {
  var a = 2;
  function f2() {
    var a = 3
    console.log(3)
  }
}