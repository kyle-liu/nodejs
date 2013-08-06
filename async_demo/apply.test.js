var async = require('async');
var should = require('should');


//如果该函数想使用asyn.apply来绑定参数，那么该函数必须支持多参数传入
function sum() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++){
        sum=sum+arguments[i];
    }
   return sum;

}


it('通过async.apply绑定参数', function () {
    //给sum函数绑定一个参数10,并且产生一个新函数newSum,这个新函数默认就绑定了参数10
    var newSum = async.apply(sum, 10);
    //由于newSum函数已经绑定了参数10，所以传入参数3时，实际上一共传入了10，3这两个参数
    (newSum(3)).should.equal(13);
});