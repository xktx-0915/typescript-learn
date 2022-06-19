// 泛型函数
function getData<T>(value: T): T {
  return value;
}

getData<number>(123);
getData<string>('sunshine');
// getData<number>('error demo'); // 类型“string”的参数不能赋给类型“number”的参数。

// 泛型类
class MinClass<T> {
  public list: T[] = [];
  add(value: T): void {
    this.list.push(value);
  }
  min(): T {
    let minNum = this.list[0];
    for (var i = 0; i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i];
      }
    }
    return minNum;
  }
}

// 实例化
const m1 = new MinClass<number>();
m1.add(1);
m1.add(423);
m1.add(12);
console.log(m1.min());

// 泛型接口
interface ConfigFn {
  // 方式一
  <T>(value: T): T;
}
const getFunData: ConfigFn = function <T>(value: T): T {
  console.log(value);
  return value;
};

getFunData<number>(123);
getFunData<string>('123');

interface ConfigFn2<T> {
  // 方式二
  (value: T): T;
}

function getData2<T>(value: T): T {
  console.log(value);
  return value;
}
let sendData: ConfigFn2<number> = getData2;
sendData(213);

// 把类作为参数类型的泛型类
class User {
  username: string | undefined;
  password: string | undefined;
}

class MySQLDb<T> {
  add(info: T): void {
    console.log(typeof info);
  }
}

let lisi = new User();
lisi.username = '李四';
lisi.password = 'a123456';

let Db = new MySQLDb<User>();
Db.add(lisi);
