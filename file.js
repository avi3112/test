// var obj = {
//     a: "hello Prabir", // property
//     b: 20,
//     c: true,
//   };
//   console.log(obj.a) // "hello Prabir", accessed with doted notation
//   console.log(obj.b) // 20
//   console.log(obj.c) // true
  
//   console.log(obj["a"]) // "hello Prabir", accessed with bracket notation
//   console.log(obj["b"])// 20
//   console.log(obj["c"]) // true


// let arr = [10, 20, 30];

// arr.forEach(function (elem, index) {
//   console.log(elem  +  "comes at" + index);
// });



// var arr = [10, 20, 30];

// var result = arr.filter(function (elem) {
//   return elem !== 20;
// });
// console.log(result);


// let fun = a => console.log(a+20);

// let result= fun(5)
// console.log(result)

// var userJSON = {'name': 'Prabir', age: 25}
// var userString = JSON.stringify(userJSON);
// console.log(userString);

var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg);
}
greeting();

console.log("this is ")