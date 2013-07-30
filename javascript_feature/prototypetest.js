

function  ClassA(){
    this.a='a';


}



function  ClassB(){
     this.b='b';
}

ClassB.prototype=new ClassA();

var objB=new ClassB();
var objA = new ClassA();

//objA.cc();
//console.log(objA.hello());
//console.log(objB.a);


for(var p in objA){
    console.log(p);
}


for(var p in objB){
    console.log(p);
}

