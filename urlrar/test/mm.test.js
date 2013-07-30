var mm = require('mm');
var fs = require('fs');
var should =require('should');

describe('mm', function () {
    describe('#fs.readFile', function () {

        mm.error(fs, 'readFile', 'mock fs.readFile return error');
        it('mm.error后,读取文件出错', function () {
            fs.readFile('/etc/hosts', 'utf8', function (err, conttent) {
                /**
                 * 判断对象是否存在
                 * should.exist({})
                 * should.exist([])
                 * should.exist('')
                 * should.exist(0)
                 * should.exist(null)      // will throw
                 * should.exist(undefined) // will throw
                 */
                should.exists(err);
                //console.log(err);
                //err.should.be.equal('[MockError: mock fs.readFile return error] name: MockError');

            });
        });

        it('mm.restore()恢复后,正常读取内容', function () {
            mm.restore();
            fs.readFile('/etc/hosts', 'utf8', function (err, content) {
                should.not.exist(err);  //断言err为null
                should.exist(content);  //断言content不为null
                content.should.be.a('string'); //断言content是一个字符串
                content.should.not.be.empty; //断言content不为空


            });
        });


    });

});
