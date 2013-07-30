var should = require('should');


describe('should用法', function () {

    it('eql比较对象的属性值是否相等', function () {
        var foo1 = {
            foo: 'bar'
        }
        var foo2 = {
            foo: 'bar'
        }

        foo1.should.eql(foo2);
        foo1.should.eql({foo: 'bar'});
        foo2.should.eql({foo: 'bar'});


        [1, 2, 3].should.eql([1, 2, 3]);
        [1, 2, 4].should.not.eql([1, 2, 3]);

        'test'.should.eql('test');
        'test'.should.not.eql('test2');

        var str1 = 'string';
        var str2 = 'string';
        str1.should.eql(str2);


    });

    it('equal比较两个对象引用是否引用同一个对象', function () {
        var foo1 = {
            foo: 'bar'
        }
        var foo2 = {
            foo: 'bar'
        }

        foo1.should.not.equal(foo2);
        foo1.should.not.equal({foo: 'bar'});
        foo2.should.not.equal({foo: 'bar'});

        var foo3 = foo2;
        foo2.should.equal(foo3);

        /**
         * 在javascript中用 ’=‘和 ‘new’创建出来的字符串目前
         * 测试原理和JAVA的String原理类似
         */
        var str1 = 'test';
        var str2 = 'test';

        str1.should.equal(str2);
        (str1 === str2).should.be.true;

        var str3 = new String('test');
        str1.should.not.equal(str3);
        str2.should.not.equal(str3);

        (str1 === str3).should.be.false;
        (str2 === str3).should.be.false;


    });

});