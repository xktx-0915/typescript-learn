/*
 * 类型：一系列值及可对其执行的操作
 */

// any：是任意类型的父类型，同时也任意类型的子类型，可以赋予任意类型的值。相当于写普通的JavaScript，一般不推荐使用any
let a: any = 23;
a = 'sunshine';
a = false;
console.log(a); // false

// unknown：是任意类型的父类型，但仅此而已。代表未知类型，若在编写代码时不清楚一个值的类型，应该使用unknown类型，此时表示任意类型，但是typescript也会要求你再做检查来确定其类型
let code: unknown = 'vue';
code = false;
code = 34;
// let nums: number = code; // 不能将类型“unknown”分配给类型“number”
let nums2: number = code as number; // 必须将unknown类型断言之后才能赋值

// boolean：该类型有两个值(true和false)，该类型的值可以进行比较(==、===、||、&&、？、！)
let boolean1 = true;
let boolean2 = false;

// number：数值类型
let num = 23;
let age: number = 23;

// bigint：number类型的最大数为2^53，bigint可以表示比该值大很多的数，后面得接个n和number做区分
let big = 1234n;
let big2: bigint = 234n;

// string：字符串类型
let strName = 'xk';
let str: string = 'sunshine';

// symbol：es6新引入类型，表示独一无二的值，常用于替代对象和映射的字符串键，
const A = Symbol('A');
let B: symbol = Symbol('B');
console.log(A === B); // false
let c = A === B; // boolean类型，结果为false

// {}：对象，键值对组合
// 第一种方式：声明为object
let obj: object = {
  b: 'x',
};
// console.log(obj.b);  // 类型“object”上不存在属性“b”。

// 对象字面量语法，typescript自行推导对象的结构
let student = {
  name: 'sunshine',
  age: 23,
  c: {
    job: 'computer',
  },
};
console.log(student.name); // sunshine
console.log(student.c.job); // computer
// 使用const、let声明对象时有什么区别
const objectTestConst: {
  b: string;
} = {
  b: 'const声明',
};
console.log(objectTestConst.b);
let objectTest: {
  b: string; // 事先声明出对象中属性的类型
} = {
  b: 'let声明',
};
console.log(objectTest.b); // sunshine

// enum枚举类型
enum CUP_TYPE {
  //在ts中会给每一个可能的结果赋值一个整数 方便在计算机中存储和使用 默认是0
  SMALL_CBIG_CUP_TYPE = 1,
  MID_CUP_TYPE, //2
  BIG_CUP_TYPE, // 3
}

console.log(CUP_TYPE.SMALL_CBIG_CUP_TYPE);

// never类型：永远不会返回值
// function testNever(x: number, y: number): never {
//   // console.log('调用了');
//   throw new Error('无返回值');
//   // return x + y; // 不能将类型“number”分配给类型“never”。
// }
// testNever(1, 2);

// array类似：数组
let arr: string[];
arr = ['a', 'b', 'c'];
console.log(arr);

let arr2: Array<number> = [1, 2, 3];
console.log(arr2);

// 元组
let mytuple = [10, 'Runoob'];
console.log(mytuple[0]); // 10

// 函数的参数类型
function addCount(x: number, y: number) {
  return x + y;
}

// 可选类型
function addResult(x: number, y?: number) {
  if (y) {
    return x + y;
  }
}

// 联合类型
function resData(x: number | string | boolean) {
  return x;
}
