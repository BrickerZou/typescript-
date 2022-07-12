// private name 类里的属性不能随意修改 默认是public

// 遇到类型不明确时，使用泛型
// T为未知的一个类型
function fn<T>(a:T):T{
    return a;
}
function fn2<T extends Animal>(a:T):T{
    return a;
}
console.log(fn(10))