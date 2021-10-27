//全局number =5
var number = 5;
var obj = {
  //this转化为对象
  number: 3,
  //立即执行的匿名函数,this并不会丢失
  fn1: (function () {
    // 函数作用域的属性,在匿名函数中没有自己的this
    var number;
    // this.number = 6
    this.number *= 2;
    // undefined
    number = number * 2;
    //函数作用域中的number赋值为3
    number = 3;
    //对象中嵌套函数,this指向丢失,指向window
    return function () {
      //window.number = 5
      var num = this.number;
      //10
      this.number *= 2;
      // 5
      console.log(num);
      //30
      number *= 3;
      console.log(number);
    };
  })(),
};
// 引用后调用 还是指向window
var fn1 = obj.fn1;
fn1.call(null);
//这个this是指向正常的
obj.fn1();
//
console.log(window.number);

function sayHi() {
  console.log("Hello", this.name);
}
var person1 = {
  name: "LingYe",
  sayHi: function () {
    setTimeout(function () {
      console.log("Hello", this.name);
    });
  },
};

var person2 = {
  name: "lzx",
  sayHi: sayHi,
};

var name = "lsy";
person1.sayHi()  //lsy
setTimeout(person1.sayHi,100);
setTimeout(person2.sayHi())//lzx

//new 一个对象的时候发生了什么
function _new(){
    let target = {}
    //第一个参数是构造函数
    let [constructor,...args] = [...arguments]
    //执行[[原型]]连接,target是构造函数的实列,将对象的原型链指向构造函数的原型链。
    target.__proto__ = constructor.prototype
    //执行构造函数,将属性或者方法添加到创建的空对象中
    //将this绑定到构造器上
    let result = constructor.apply(target,args)
    if(result && (typeof(result) == 'object') || typeof(result) == 'function'){
        return result
    }
    return target
}
const app = (a,b)=>{
    console.log(rest)
}
app()