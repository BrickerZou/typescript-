/**/
//  npm i -g  typescript  全局安装
//  tsc -init 生成tsconfig
// tsc day1.ts 编译生成js文件 默认编译成es3(可设置)
/**/


function func():number{
    let a:number;
    a=1;
    return a
}
// 限制b为两个string类型
let str:"male"|"female"; 

let obj:object={name:"zcm"};
// 用来指定obj包括哪些属性 ,?代表可选
let obj2:{name:string,age?:number}
let obj3:{name:string,[propsName:string]:unknown}
obj3={name:"zcm",id:1,age:20}
// 注意上两者obj和obj2区别

let arr:number[]=[1,2,3];
let arr2:Array<number>;
// 如果不指定，会自动指定为any，any类型尽量不用
let any;
// any与unknown的区别： 当a:int 时候 any类型可赋给a(a变any)，unknown类型不可赋(a类型已知)

enum Gender{
    Male=0,
    FeMale=1
}