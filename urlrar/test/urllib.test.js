var mapping = [
    ['http://www.baidu.com', 'http://www.baidu.com'],
    ['http://t.sn/StVkqS', 'http://nodejs.org/community/'],
    ['http://url.cn/48JGfK', 'http://baike.baidu.com/view/6341048.htm'],

    ['http://url.cn/3OMI3O', 'http://v.youku.com/v_show/id_XMjc2MjY1NjEy.html', 2 ],
    ['http://luo.bo/17221/', 'http://luo.bo/17221'],
    ['http://t.itc.cn/LLHD6', 'http://app.chrom.csdn.net/work_detail.php?id=57']
];

var desc = 'should expand ' + mapping.length + ' shorten urls success';
var urllib = require('../lib/urllib');

describe('url test', function () {
    it('', function (done) {

        var counnter = 0;
        mapping.forEach(function (map) {
            urllib.expand(map[0], function (err, longurl, redirectCounter) {
                should.not.exist(err); //断言不会出现错误
                map[1].should.equal(longurl);
                if (map[2]) {
                    redirectCounter.should.equal(map[2]);
                }
                if (++counnter === mapping.length) {
                    done();
                }
            });

        });
    });
});


//it('should return empty string when shorturl set wrong', function (done) {
//
//    urllib.expand('', function (err, longurl) {
//        should.not.exist(err);
//        should.not.exist(longurl);
//        done();
//    });
//
//});


//输入非法参数
//it('should throw error when pass null', function () {
//    try {
//        urllib.expand();
//    }
//    catch (e) {
//        e.name.should.equal('TypeError');
//        e.message.should.equal('undefined is not a function');
//
//    }
//
//    (function () {
//        urllib.expand();
//    }).should.throw();
//
//    (function () {
//        urllib.expand(null);
//    }).should.throw();
//});



