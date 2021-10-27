let a = 3;
function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);

//let 定义的变量也可以被查找到
let vail = 2;
function multiplyThis(n) {
  let ret = n * vail;
  return ret;
}
let multplied = multiplyThis(6);
console.log("example", multplied);

//返回函数的函数
let val = 7;
//这种形式常常被应用于回调函数
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b;
    return ret;
  }
  return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log("example", sum);

//当函数返回封装函数,且这个封装函数使用了外层函数作用域的变量的时候,这些变量会绑定在这个封装函数上,实际上一个小小的背包。这个叫做闭包
function createCounter() {
  let couter = 0;
  const myFunction = function () {
    couter = couter + 1;
    return couter;
  };
  return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3);

let c=4
//这里函数嵌套会保留外层函数的值,也就是闭包
const addX = (x)=>{(n)=>{n+x}}
//使用了外层函数
const addThree = addX(3)
//闭包存储了外层函数的输入值,像个小背包一样
const d = addThree(c)