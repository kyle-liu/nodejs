var async = require('async');
var should = require('should');

/**
 *相当于while，但其中的异步调用将在完成后才会进行下一次循环
 *
 */

it('whilst正常循环', function (done) {
    var count = 0;
    async.whilst(
        function () {
            return count < 5;
        },
        function (callback) {
            console.log("iter: " + count);
            setTimeout(function () {
                count++;
                console.log('fn: ' + count);
                callback();
            }, 500);

        },
        function (err) {
            console.log('final :' + count);
            console.log('err :' + err);
            done();
        }
    );
});

it('当达到某个条件终止循环', function (done) {
    var count1 = 0;
    async.whilst(
        function () {
            return count1 < 5;
        },
        function (callback) {
            setTimeout(function () {
                count1++;
                console.log('fn: ' + count1);
                if (count1 === 3) {
                    callback("stop");
                }
                else {
                    callback();
                }

            }, 1000);
        },
        function (err) {
            console.log('final :' + count1);
            console.log('err :' + err);
            done();
        }
    );
});










