/**
 * User: kyle
 * Date: 13-8-23
 * Time: PM12:03
 */


var arr = [
    {name: 'Jack', delay: 10000},
    {name: 'Mike', delay: 1000},
    {name: 'Freewind', delay: 5000}
];

async.forEach(arr, function (item, callback) {
    // console.log('1.1 enter: ' + item.name);

    //异步方法

    callback();
//    setTimeout(function () {
//
//            console.log(new Date());
//            console.log('1.1 handle: ' + item.name);
//            callback(null, item.name);
//        }, item.delay);
}, function (err) {
    console.log('1.1 err: ' + err);
});
