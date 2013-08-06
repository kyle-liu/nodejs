var async = require('async');

/**
 *
 * 1.callback是调用当前函数传入的一个函数
 * 2.这个函数的意思是：当当前函数执行完时，请执行callback
 * 3.callback函数的参数的用途：
 * a.按照标准,第一个参数是err,标志着调用callback这个函数的执行情况:是否错误
 * b.后面的参数是调用callback这个函数的往callback函数中传入的参数
 */
function step1(callback) {
    setTimeout(function () {
        console.log("step1 exe");
        callback(null, 1, 2);
    }, 200);

}

function step2(arg1, arg2, callback) {
    setTimeout(function () {
        console.log("step2 exe");
        callback(null, arg1 + arg2);
    }, 100);

};

function step3(arg1, callback) {
    setTimeout(function () {
        console.log("step3 exe");
        callback(null, arg1 * 3);
    }, 120);
}


it('手动保证其执行的依赖顺序', function (done) {
    step1(function (err, arg1, arg2) {
        console.log('arg1: ' + arg1 + ' , arg2: ' + arg2);
        step2(arg1, arg2, function (err, arg1) {
            console.log('arg1: ' + arg1);

            step3(arg1, function (err, arg1) {
                console.log(arg1);
                console.log('done');
                done();
            });
        });
    });

});


/**
 * 按顺序依次执行多个函数。不同之处，每一个函数产生的值，
 * 都将传给下一个函数。如果中途出错，后面的函数将不会被执行。
 * 错误信息以及之前产生的结果，将传给waterfall最终的callback
 */
it('async.waterfall', function (done) {

    async.waterfall([
        step1 , step2, step3
    ], function (err, result) {
        console.log('async.waterfall: ' + result);
        done();
    });
});

