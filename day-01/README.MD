## Js的基本类型

js中有八大类型,他们分别是：

七大基本类型：

* undefined 指的是未定义的值

  出现场景

  * 声明一个变量但是没有赋值
  * 访问对象上不存在的属性或者未定义的变量
  * 函数定义了形参,但没有传递实参
  * void求值(void返回undefined值)

* null 表示希望一个对象被人为地重置为空对象,而非一个变量最原始的状态,指的是栈中的变量没有指向内存对象(只有引用对象才会出现null吧)

  * 如果要把一个变量赋值为对象,尽量用null
  * 一个引用对象不需要的时候,我们可以将它设置为null,方便垃圾回收器下次来回收他们。

  被视为false,当我们用基础语法找不到的时候会返回null

  ```js
  null === undefined true
  ```

* string 字符串类型

* number Js中的数字类型

* symbol   Symbol类型是解决属性名冲突的问题的,还带有模仿私有属性的功能。

  ```js
  //symbol的两个特点
  1.只有字符串和symbol对象才能作为对象属性名
  2.没有两个symbol对象是相等的,即便是他们用了相同的字符串名,除非你使用了Symbol.for()会把Symbol添加到注册中心
  const symbol1 = Symbol('my symbol')
  const symbol2 = Symbol('my symbol')
  symbol1 == symbol2 True
  
  ```

  拥有Symbol.iterator的对象被称为 可迭代的对象,你可以使用 for/of循环。

  symbol并不会出现在Object.Keys()的结果中,除非你使用Object.getOwnPropertySymbol,它实际上是作为私有属性存在的。

* BigInt  (这个是ES6最新引入的)

* Boolean 只有两种属性 true 或是 false

基本类型的集合(引用类型):

* objs...

### JS只有三种类型的基本转换

1. to string
2. to boolean
3. to number

## String

```js
toString(something) 显式转换
123+'' 隐式转换
//其他所有类型转化为string,这些是既可以显式也可以隐式的
string(123) // '123'
string(null) // 'null'
string(undefined) // undefined
string(true) // 'true'
//symbol只能显性
string(Symbol(symbol))
```

## Boolean

布尔类型的隐式转化往往发生在有逻辑运算符或是逻辑判断的情况下

```javascript
Boolean(2) //显示类型转换
if(2){}  //逻辑判断触发
2 || 'hello'
```

注意:逻辑运算符是在内部进行boolean类型转换,但实际返回的是原始操作数

```javascript
//这个是我们常常使用的一个技巧
let x='hello' && 'componet'
```

其他的逻辑判断只会返回boolean值

很显然,我们可以看到基本类型的空值都是返回false值,而引用类型的空值会被返回true

```js
//返回false值的内容
Boolean('') false
Boolean(0) false
Boolean(-0) false
Boolean(NaN) false
Boolean(null) false
Boolean(undefined) false
Boolean(false) false
```

```js
//返回true值的内容
Boolean([]) //true
Boolean({}) //true
Boolean(Symbol()) //true
Boolean(function(){}})
```

## Number类型的转换

number隐式转换容易被触发。

* 比较操作(>,<,=,>=)
* 按位操作(! & ^ ~)
* 算数操作(- + * / %) 
* 一元 + 操作
* == or  !=

```js
Number('123') /显式类型转化
+ '123' /隐式类型转换
123 != '456'/隐式类型转化
4>"5" /隐式类型转化
5/null
true | 0 
```

显示转化这些

```javascript
Number(null)  //0
Number(undefined) //NaN
Number(true) //1
Number(false) // 0
Number('12') // 12
Number('\n') // 0
Number('12s') //NaN
```

不管是显性还是隐性都没法将symbol转化为Number类型。

其中有两个特殊规则

* null 在==下，只等于null 与 undefined
* NaN不等于任何值

## Object类型转化

涉及到对象的操作比如:[1]+[2,3],引擎会把Object类型转化为原始类型.然后将原始类型转化为最终需要的属性,仍然是3中俄理性。

Boolean 无论如何都是 1 对于对象

对象会通过内部方法[ToPrimitive] 转化为原始类型,负责字符串和数字的转化。它主要使用了对象上的两个方法 valueOf 和 toString

1. 如果输入的值已经是原始类型,直接返回这个值
2. 如果不是调用toString()方法,结果是原始类型
3. 输入值调用valueOf()方法
4. 如果不是就TypeError

