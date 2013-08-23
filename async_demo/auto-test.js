var async = require('async');
var should = require('should');

it('', function (done) {
    async.auto({
        // 分析并获取有效数据
        datas: function (callback) {
            setTimeout(function () {
                console.log("datas finshed");
                callback();
            }, 1200);
        },

        // 查贴板，确认是否存在
        board: function (callback) {
            setTimeout(function () {
                console.log("board finshed");
                callback();
            }, 1000);

        },

        // 入库贴板内容
        post: ['datas', 'board', function (callback) {
            setTimeout(function () {
                console.log("post finshed");
                callback();
            }, 800);

        }],

        // 更新贴板表和用户表
        updateBoardAndUser: ['post', function (callback, result) {
            setTimeout(function () {
                console.log("updateBoardAndUser finshed");
                callback();
            }, 600);


        }],

        // 产生用户动态
        feed: ['post', function (callback, result) {
            setTimeout(function () {
                console.log("feed finshed");
                callback();
            }, 600);

        }],

        // 产生标签动态
        tagFeed: ['feed', function (callback, result) {
            setTimeout(function () {
                console.log("tagFeed finshed");
                callback();
            }, 600);

        }],

        // 通知关注者, 贴板成员，贴板作者
        notify: ['post', function (callback, result) {
            setTimeout(function () {
                console.log("notify finshed");
                callback();
            }, 600);


        }]
        // 返回JSON结果
    }, function (err, result) {
        console.log(result);
        done();

    });
});