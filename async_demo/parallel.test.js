var async = require('async');

function step1(callback) {
    setTimeout(function () {
        console.log("step1 exe");
        callback(null, "step1");
    }, 200);

}


function step2(callback) {

    setTimeout(function () {
        console.log("step2 exe");
        callback(null, "step2");
    }, 100);

}


function step3(callback) {
    setTimeout(function () {
        console.log("step3 exe");
        callback(null, "step3");
    }, 120);

}


/**
 * 并行执行多个函数，每个函数都是立即执行，
 * 不需要等待其它函数先执行。
 * 传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序
 * 如果某个函数出错，则立刻将err和已经执行完的函数的结果值传给parallel最终的callback。
 * 其它未执行完的函数的值不会传到最终数据，但要占个位置
 */
it('通过async.parallel并且执行step1,step2,step3,但是按照任务的声明顺序' +
    '返回执行结果给后面的callback', function (done) {
    async.parallel([
        step1, step2, step3
    ], function (err, results) {
        console.log("async.parallel: " + results);
        done();
    });

});
