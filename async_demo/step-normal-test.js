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


it('普通的方式去调用step1,step2,step3导致执行出的结果是异步的', function (done) {
    step1(function (err, v1) {
        console.log(v1)
    });
    step2(function (err, v2) {
        console.log(v2)
    });
    step3(function (err, v3) {
        console.log(v3)
    });
    done();
});




