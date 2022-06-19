// 类的定义
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`${this.name}说:我的年龄为${this.age}`);
  }
}

// 继承
class Father extends Person {
  type: string;
  constructor(name: string, age: number, type: string) {
    super(name, age);
    this.type = type;
  }
  fatherSay() {
    console.log(`${this.name}说：我是${this.type}`);

    // super：用于调用父类中的函数，在函数中使用
    super.say();
  }
}

const father = new Father('sunshine', 24, '父亲');
father.say(); // 调用person中的say
father.fatherSay();

// 类的修饰符：public、private、protected、readonly
// class User {
//   public username: string; // public：默认值，公共属性，谁都可以访问
//   private _age: number; // 私有属性，仅在类内部可以访问，一般都用_开头
//   protected isTrue: boolean; // 受保护的属性，只能在当前类和子类中使用和修改
//   readonly str: string; // 只读属性
// }

// setter、getter：当一些私有属性我们想获取他的值或修改其属性
class Animal {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  set name(newVal: string) {
    this._name = newVal;
  }

  get name() {
    return this._name;
  }
}

const dog = new Animal('狗');
console.log(dog.name);
dog.name = '铁铁';
console.log(dog.name);

// 静态成员 static，只能通过类来调用
class User {
  static admin: string = 'sunshine';
  static getAdmin() {
    console.log(`管理员是:${this.admin}`);
  }
}
console.log(User.admin);
User.getAdmin();

// 抽象类：abstract 指不具体的类，通常没有什么功能，被用来当父类使用，不能被实例化，且规定了所有继承自它的非抽象子类必须实现它的所规定的功能和相关操作

abstract class Shape {
  abstract getArea(): number;
}

class RectSize extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();
    this._width = width;
    this._height = height;
  }
  getArea(): number {
    return this._width * this._height;
  }
}

const rect = new RectSize(12, 43);
console.log(rect.getArea());

// 接口 interface
interface Duck {
  name?: string;
  age?: string;
  readonly sex: string; // 只读属性：只能在对象刚刚创建的时候修改其值
  color: string;
  remark?: string;
}

const duck: Duck = {
  name: '小黄鸭',
  age: '2011/01/03',
  sex: '公',
  color: 'yellow',
  remark: '实验楼一号鸭',
};

// 接口扩展，用于添加不确定的属性
interface Duck2 {
  color: string;
  readonly sex: string; // sex属性是只读的
  [propsName: string]: any; // 属性扩展
}

const duckPro: Duck2 = {
  color: 'yellow',
  sex: 'male',
  age: 1,
  weight: 5,
};

// ReadonlyArray类型，只读数组
const duck1: Duck = { color: 'yellow', sex: 'male' };
const duck2: Duck = { color: 'yellow', sex: 'male' };
const duck3: Duck = { color: 'yellow', sex: 'male' };
const duck4: Duck = { color: 'yellow', sex: 'male' };
let duckArr: ReadonlyArray<Duck> = [duck1, duck2, duck3, duck4];
// duckArr[0] = { color: "yellow", sex: "female" }; // error
// duckArr.push({ color: "yellow", sex: "female" }); // error
console.log(duckArr.length);

// 函数类型，需要在接口中调用签名
interface Duck3 {
  color: string;
  readonly sex: string;
  [propsName: string]: any;
  eat(food: string): string; // 调用签名
}

const duckFunc: Duck3 = {
  color: 'yellow',
  sex: 'male',
  eat: (food: string): string => {
    console.log(food);
    throw new Error('Function not implemented.');
  },
};

// 可索引类型
interface Duck4 {
  color: string;
  readonly sex: string;
}

interface DuckArray {
  [index: number]: Duck4;
}

const duckArrList: DuckArray = [
  {
    color: 'yellow',
    sex: 'male',
  },
  {
    color: 'yellow',
    sex: 'male',
  },
  {
    color: 'yellow',
    sex: 'male',
  },
];

// 接口继承:一个接口可以继承多个接口，创建出多个接口的合成接口。
interface DuckColor {
  color: string;
}

interface Duck7 extends DuckColor {
  age: number;
}

// let duck7:Duck7 = {
//   age: 0,
//   color: ""
// }

let duck7 = <Duck7>{};
duck7.color = "blue";
duck7.age = 10;