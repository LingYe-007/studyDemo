//exampleOne
// 这个有个坑,当我们var连登定义的时候,他只会声明前面的一个属性,后面的属性反而通过作用域链往前查找
console.log(a, b);
var a = 1,
  b = 2;
function foo() {
  console.log(a, b);
  var a = (b = 13);
  console.log(a, b);
}
foo();
console.log(a, b);

// exampleTwo
// 个人猜想  true,12,林一一,林一一,0
// 这是因为在函数作用域里没有被明确声明的变量会一直往上去查找,如果到了全局作用域还是没有找到就设置为undefined
a = 0;
function foo() {
  var a = 12;
  b = "林一一";
  // window对象只有在浏览器上才有
  // console.log('b' in window)
  console.log(a, b);
}
foo();
console.log(b);
console.log(a);

// exampleThree
// 2019 2019 2019 找不到变量
// v1是函数fn的私有变量
fn();
console.log(v1);
console.log(v2);
console.log(v3);
function fn() {
  var v1 = (v2 = v3 = 2019);
  console.log(v1);
  console.log(v2);
  console.log(v3);
}
//匿名函数下带=号的变量提升
//会报错:Uncaught:TypeError is not function
//这个是因为 var 声明了变量名,为undefined但是函数并没有在堆存储空间中进行创建,导致实际上这个变量默认为一个基本数据,而不是引用对象
print();
var print = function () {
  console.log("i am not here");
};
//条件判断下的变量提升
// 条件判断无论在什么条件下都会进行变量提升,但如果我们在条件中声明变量,它并不会进行提升
console.log(a);
if (false) {
  var a = "伍勋高";
}
console.log(a);
// 同时判断条件成立的时候,我们才会对条件内的函数进行赋值,不成立不被赋值就被定义为undefined
// 对undefined执行()的时候会报TypeError
// 进入块级作用域后立即对函数进行赋值？
console.log(print());
if (true) {
  function print() {
    console.log("林一一");
  }
}
console.log(print());
// 重名问题下的变量提升
// 在var和function都存在的情况下,函数的命名会覆盖掉var的声明
console.log(a);
var a = 1;
function a() {
  console.log(1);
}

function a(b) {
  console.log(b);
}
a(45);
// 等价于
function a(b) {
  var b;
  b = "?";
  console.log(b);
}

// 重复使用var并不会把值赋值成undefined
var a = 1;
function foo(a) {
  console.log(a);
  var a;
  console.log(a);
}

// 匿名函数访问不到外部变量,同时匿名函数不会有变量提升的操作指的是全局的
var foo = "LingYe"(function (f) {
  console.log(foo);
  // LingYe
  var foo = f || "undefined";
  console.log(foo);
})(foo);
console.log(foo);

(function (foo) {
  console.log(foo);
  var foo = foo || "world";
  console.log(foo);
})(foo);
console.log(foo);

var a = 10;
(function () {
  //10
  console.log(a);
  //10
  console.log(window.a);
  //
  var a = 20;
  console.log(a);
})();
//在对象中的优先级是先右到左的。
var b = {
  a,
  c: b,
};
//undefined
console.log(b.c);

var a = 1;
function foo(a, b) {
    //1
  console.log(a);
  a = 2;
  arguments[0] = 3;
  var a;
  //3,1,undefined
  console.log(this)
  console.log(a,this.a,b)
}
foo(a)