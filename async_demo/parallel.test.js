var async = require('async');
var should = require('should');


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


function step4(callback) {
    setTimeout(function () {
        callback(new Error('step4 throw error'));
    }, 130);

}

/**
 * 并行执行多个函数，每个函数都是立即执行，
 * 不需要等待其它函数先执行。
 * 传给最终callback的数组中的数据按照tasks中声明的顺序，而不是执行完成的顺序
 * 如果某个函数出错，则立刻将err和已经执行完的函数的结果值传给parallel最终的callback。
 * 其它未执行完的函数的值不会传到最终数据，但要占个位置
 */

describe('通过async.parallel并且执行step1,step2,step3,但是按照任务的声明顺序 ' +
    '返回执行结果给后面的callback', function () {
    it('#tasks以数组方式传入', function (done) {
        async.parallel([
            step1, step2, step3
        ], function (err, results) {
            should.exist(results);
            results.should.eql(['step1', 'step2', 'step3']);
            done();
        });

    });


    it('#tasks以json方式传入', function (done) {
        async.parallel({
            step1: step1,
            step2: step2,
            step3: step3
        }, function (err, results) {
            should.exist(results);
            results.should.hasOwnProperty('step1', 'step1');
            results.should.hasOwnProperty('step2', 'step2');
            results.should.hasOwnProperty('step3', 'step3');
            done();
        });

    });

    it('#step4出现error', function (done) {
        async.parallel({
            step1: step1,
            step4: step4,
            step2: step2,
            step3: step3
        }, function (err, results) {
            should.exist(err);
            should.exist(results);
            console.log(results);
            results.should.hasOwnProperty('step1');
            done();
        });

    });


});

