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

it('人工控制step1,step2,step3的顺序执行', function (done) {
    step1(function (err, v1) {
        console.log(v1);
        step2(function (err, v2) {
            console.log(v2);

            step3(function (err, v3) {
                console.log(v3);
                done();

            });
        });
    });

});

/**
 * 有多个异步函数需要依次调用，一个完成之后才能执行下一个。各函数之间没有数据的交换，仅仅需要保证其执行顺序
 */
it('通过async.series控制step1,step2,step3的顺序执行，并按照执行顺序返回一个数组给最后的callback', function (done) {
    async.series([
        step1, step2, step3
    ], function (err, values) {
        console.log("async.series: " + values);
        done();
    });

});

