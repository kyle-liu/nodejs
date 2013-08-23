/**
 * User: kyle
 * Date: 13-8-23
 * Time: PM5:37
 */

var async = require('async');
var calls = [];

it('', function (done) {
    async.nextTick(function () {
        calls.push('two');
    });
    calls.push('one');
    async.nextTick(function () {
        console.log(calls); // -> [ 'one', 'two' ]
    });

});
