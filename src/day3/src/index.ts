// npm init -y  的含义:yes的意思,在init的时候省去了敲回车的步骤 生成package.json
// npm install -g cnpm --registry=https://registry.npm.taobao.org
// cnpm i -D webpack wepack-cli typescript ts-loader
// 在package.json里scripts + "build":"webpack --mode development"
// npm run build打包

/* 面向对象 */

/** 
static 变量（可以不实例化类直接访问） 
super super.方法   （父类）
子类中如果有constructor() 则必须super(父类的构造变量) super()
 */
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;

    }
}
const per = new Person("zcm",20);
// 抽象类不能实例化，就是用来继承用的
// 抽象方法只能写在抽象类，子类必须重写抽象方法（相当于占了个方法位）
abstract class Animal{

}


// 接口
type myType={
    name:string
}
interface myInterface{
    name:string
}
interface myInterface{
    age?:number
}
// interface可叠加
const interf:myInterface={
    name:"zcm",
    age:20
}
class Test implements myInterface{
   name:string;
   constructor(name:string){
    this.name=name;
   }
}

// 接口里全是抽象方法，抽象类可有普通方法