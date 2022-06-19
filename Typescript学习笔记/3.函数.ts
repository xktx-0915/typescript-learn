// 具名函数
function add(x: number, y: number) {
  return x + y;
}

// 函数表达式
let greet2 = function (name: string) {
  return name;
};

// 函数表达式
let say = (age: number) => {
  return age;
};

// 箭头函数简写模式
let date = (date: string) => date;

// 构造函数方法
let func = new Function('name', 'return name');

// 可选参数函数及设置默认值
function log(name: string, userId?: number, job = 'programmer') {
  console.log(userId); // number | undefined
  console.log(job); // programmer  默认值
  if (userId) {
    console.log(`${name},${userId}`);
  }
}

// 显式注解默认参数的类型
type Context = {
  username?: string;
  age?: number;
};
function sunshine(context: Context = {}, userId: number) {
  console.log(context.age);
  console.log(context.username);
  console.log(userId);
}

// 参数传递
function sun(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
let res = sun([12, 43, 12]);
console.log(res); // 67

// arguments方法：total和n均为any类型，不安全
function sum(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}
// sum(1, 3, 4);

// 剩余参数
function sumVariable(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
let res2 = sumVariable(1, 34, 5);
console.log(res2);

// call、apply、bind方法：改变函数this指向
function addNum(x: number, y: number): number {
  console.log(x + y);
  return x + y;
}
addNum(12, 41);
addNum.call(null, 10, 43);
addNum.apply(null, [10, 30]);
addNum.bind(null, 10, 14)();

let x = {
  a() {
    return this;
  },
};

console.log(x.a());
let a = x.a;
console.log(a()); // undefined

// 若函数中使用this，则在参数中声明this的类型
function fancyData(this: Date) {
  return this.getDate();
}

// 函数重载：定义重载签名 + 实现签名

// // 定义重载签名
function greet(args: number): number;
function greet(args: string): string;

// 实现签名
function greet(args: number | string): number | string {
  if (typeof args === 'string') {
    return 'string';
  }
  if (typeof args === 'number') {
    return 123;
  }
  throw new Error('Unable to greet');
}

let greetRes = greet(123);
console.log(greetRes);

