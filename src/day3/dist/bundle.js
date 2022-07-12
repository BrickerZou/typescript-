/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\r\n// npm init -y  的含义:yes的意思,在init的时候省去了敲回车的步骤 生成package.json\r\n// npm install -g cnpm --registry=https://registry.npm.taobao.org\r\n// cnpm i -D webpack wepack-cli typescript ts-loader\r\n// 在package.json里scripts + \"build\":\"webpack --mode development\"\r\n// npm run build打包\r\n/* 面向对象 */\r\n/**\r\nstatic 变量（可以不实例化类直接访问）\r\nsuper super.方法   （父类）\r\n子类中如果有constructor() 则必须super(父类的构造变量) super()\r\n */\r\nclass Person {\r\n    constructor(name, age) {\r\n        this.name = name;\r\n        this.age = age;\r\n    }\r\n}\r\nconst per = new Person(\"zcm\", 20);\r\n// 抽象类不能实例化，就是用来继承用的\r\n// 抽象方法只能写在抽象类，子类必须重写抽象方法（相当于占了个方法位）\r\nclass Animal {\r\n}\r\n// interface可叠加\r\nconst interf = {\r\n    name: \"zcm\",\r\n    age: 20\r\n};\r\nclass Test {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n}\r\n// 接口里全是抽象方法，抽象类可有普通方法\r\n\n\n//# sourceURL=webpack://day3/./src/index.ts?");

/***/ }),

/***/ "./src/index2.ts":
/*!***********************!*\
  !*** ./src/index2.ts ***!
  \***********************/
/***/ (() => {

eval("\r\n// private name 类里的属性不能随意修改 默认是public\r\n// 遇到类型不明确时，使用泛型\r\nfunction fn(a) {\r\n    return a;\r\n}\r\nconsole.log(fn(10));\r\n\n\n//# sourceURL=webpack://day3/./src/index2.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index2.ts"]();
/******/ 	
/******/ })()
;