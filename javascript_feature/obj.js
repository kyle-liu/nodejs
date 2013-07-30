
function Cat(){
    //成员变量，对象实例可用
    this.name = 'canhun';
    //函数局部变量,只在这函数内可见
    var  age =19;

}

console.log(new Cat());
var cat =new Cat();
console.log(cat.name);


var  Dog = {
    name : "xiaobai",
    bar:function (){
        console.log("wang wang");
    }
}

var dog1=Object.create(Dog);

console.log(dog1.name);
dog1.bar();

var dog2= Object.create(Dog);
dog2.name ="xiaohei";
console.log(dog2.name);
console.log(dog1.name);

var cat3 =  new  Cat();
var cat4= new Cat();

console.log(cat3.prototype === cat4.prototype);
//cat3.prototype = dog1;

console.log("" +cat3.prototype);
console.log("" +cat4.prototype);
console.log(Cat.prototype);


