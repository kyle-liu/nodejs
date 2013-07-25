


//使用require不会重复加载模块，也就是无论调用多少次require，获得的模块都是同一个


/**
 * 以下hello1和hello2引用的都是同一个对象
 * 所以hell2.setName("BYVoid 2")会覆盖hello1.setName("BYVoid");
 */
var hello1 = require("./module");


hello1.setName("BYVoid");

var hello2 = require("./module");

hello2.setName("BYVoid 2");


//输出BYVoid 2
hello1.sayHello();

