let a:any="ha";
let b:string="hello";
// 类型断言,告诉解析器其实际类型
b= a as string;
b= <string> a;


// 配置编辑选项
// "include":["./src/**/*"]
// exclude:[] 除去 、 path:[]单个文件
// tsc 一键编译
// "outDir": "./dist" 指定编译生成的文件路径
// allowJs:false 是否对js文件编译
// checkJs:false 是否检查js文件语法
// noEmit:false 是否生成编辑js文件

// noImplicitThis:true 不允许指向不明确的this(类型)
// strictNullChecks:true 严格检查空值 可用？和if(!==null)

// strict:true 严格检查的总开关！