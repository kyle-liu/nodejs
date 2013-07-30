(function foo() {

    function sub() {
        var  a =1000;
       this.a=100;

        debugger;
       //console.log('sub : '+  a);
   };
    sub.a = 1;
    sub();
    console.log("sub.a : "+ sub.a);

    var s2 =new sub();
    var s1 = new sub();

    console.log("s1.a : "+ s1.a);
    var s2 =new sub();

    console.log("s2.a : "+ s2.a);

    s1.a=99999;
    console.log("s1.a : "+ s1.a);
    console.log("s2.a : "+ s2.a);

    //sub();

   console.log('foo :' +this.a);
})();

//foo();
console.log(this.a);
console.log(global.a);

