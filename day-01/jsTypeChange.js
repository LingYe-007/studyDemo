// 下列是一些Js的类型的隐式转化,使用 ===是不会触发类型的隐式转换的,这也是===被倡导的原因
// 感觉这个会输出true,对于true or false, +号是优先触发number转化的
console.log(true + false);
// 当出现/数学运算符的时候,字符串会进行隐式转换,如果是数字则是数字,如果不是则转化为NaN 结果为2
console.log(12 / "6");
// 这个肯定是'18number'
console.log(15 + 3 + "number") // 这个应该是true吧,不太清楚数组来比较的时候用什么来比较
// 引用对象使用迭代属性,先转化为字符串再转化为number
console.log([1]>null)
// +bar先求值,进行Number类型转化,结果为NaN,最后输出为fooNaN,+放在前面相当于进行Number类型的转化
console.log("foo" + +"bar");
// ==号左右都是转化为number类型再进行比较的,'true'被转化为NaN,字符串转化为boolean值是1,但转化为number类型,会转化为NaN
console.log(true == "true");
// null不等于任何值,除非是null和undefined
console.log(null == "");
// ==转化为number类型,但!运算符是转化为boolean类型
console.log(!!"false" == !!"true");
// 先使用valueof和toString
console.log(["X"] == "X");
// null1
console.log([] + null + 1);
// false,引用类型,地址不同？
console.log([1, 2, 3] == [1, 2, 3]);
//+使用的使用首先转化为数字(如果是数字类型的话),其次再转化为字符串,??????????????无法理解
console.log({} + [] + {} + [1]);
//这个是优先级的问题,+的优先级要比!高一点,'truefalse'
console.log(!+[] + [] + ![]);

// + - 号触发效果不同,-号先触发valueOf,+先触发stringOf
console.log(new Date(0) - 0);
console.log(new Date(0) + 0);

// && 的特殊使用
let a = 123 && 1
console.log(a)
console.log(false && false)
// 两个都成立的话会偏向后者？
console.log('12321' && '123123123')