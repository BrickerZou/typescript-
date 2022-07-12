"use strict";
/**/
//  npm i -g  typescript  全局安装
//  tsc -init 生成tsconfig
// tsc day1.ts 编译生成js文件 默认编译成es3(可设置)
/**/
function func() {
    let a;
    a = 1;
    return a;
}
// 限制b为两个string类型
let str;
let obj = { name: "zcm" };
// 用来指定obj包括哪些属性 ,?代表可选
let obj2;
let obj3;
obj3 = { name: "zcm", id: 1, age: 20 };
// 注意上两者obj和obj2区别
let arr = [1, 2, 3];
let arr2;
// 如果不指定，会自动指定为any，any类型尽量不用
let any;
// any与unknown的区别： 当a:int 时候 any类型可赋给a(a变any)，unknown类型不可赋(a类型已知)
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["FeMale"] = 1] = "FeMale";
})(Gender || (Gender = {}));
