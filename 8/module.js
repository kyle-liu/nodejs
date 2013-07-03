
var name;


//exprots对象把setName和setSayHello作为模块的访问接口
//要好好理解exports对象的作用
exports.setName = function(thyName) {
    name = thyName;
};

exports.sayHello = function() {
    console.log("Hello " +name);
};

