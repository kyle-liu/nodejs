var should = require('should');

function Person() {
    this.name = 'canhun';
    this.age = 30;

    this.sayName = function () {
        console.log("my name");
    }

}


describe('对象原型 ', function () {
    var p1 = new Person();
    var p2 = new Person();

    it('Person.prototype对象是一个{}空对象', function () {
        p1.should.be.an.instanceof(Person);
        p2.should.be.an.instanceof(Person);


        should.exist(Person.prototype); //存在Person.prototype
        Person.prototype.should.be.a('object');  //Person.prototype是一个对象
        Person.prototype.should.eql({}); //Person.prototype是一个空对象

    });


    it('原型的constructor指向其所在的函数(Person.prototype.constructor === Person)', function () {

        should.exist(Person.prototype.constructor);
        Person.prototype.constructor.should.equal(Person); //Person.prototype的constructor === Person

    });


    it('通过原型增加属性后,对象实例p1,p2也都有此属性', function () {

        //给Person.prototype增加一个sex属性
        Person.prototype.sex = '男';

        Person.prototype.should.have.property('sex', '男'); //Person.prototype有sex: '男'这对属性值
        p1.should.have.property('sex', '男'); //对象实例p1也含有sex: '男'这对属性值
        p2.should.have.property('sex', '男'); //对象实例p2也含有sex: '男'这对属性值

        Person.prototype.saySex = function () {
            console.log(this.name + ' is ' + this.sex);
        }
        should.exist(Person.prototype.saySex);


    });


    it('通过原型修改属性后,对象实例p1,p2的sex属性也发生变化', function () {
        Person.prototype.sex = '男人';  //通过原型修改此属性
        p1.should.have.property('sex', '男人'); //对象实例p1.sex属性也同时修改为'男人'
        p2.should.have.property('sex', '男人'); //对象实例p2.sex属性也同时修改为'男人'

    });


    it('通过对象实例增加的属性，只在该实例拥有', function () {
        p1.email = 'canhun@taobao.com';
        p1.should.have.property('email', 'canhun@taobao.com'); //对象实例p1.新增属性email
        should.not.exist(p2.email); //对象实例p2无email属性
        should.not.exist(Person.prototype.email); //Person原型无email属性

    })


    it('给对象实例增加一个原型已存在同名的属性，只是该对象实例新增了一个属性，这个属性会屏蔽原型中保存的同名属性,' +
        '但是不会影响其他对象实例和原型对象的属性', function () {
        p1.sex = '猛男';
        p1.should.have.property('sex', '猛男'); //对象实例p1.新增属性email
        p2.should.have.property('sex', '男人');
        Person.prototype.should.have.property('sex', '男人');
    });


    it('在function中直接定义的方法，在每个对象实例上其实指向的是不同的对象实例', function () {

        var p3 = new Person();
        var p4 = new Person();
        p3.sayName.should.not.equal(p4.sayName);

    });


    it('通过原型增加方法时,其该类所有的实例都拥有该方法，且所有的对象实例的方法都指向原型上的方法', function () {
        Person.prototype.saySex = function () {
            console.log(this.name + ' is ' + this.sex);
        }
        should.exist(Person.prototype.saySex);
        should.exist(p1.saySex);
        should.exist(p2.saySex);
        p1.saySex.should.equal(Person.prototype.saySex);
        p2.saySex.should.equal(Person.prototype.saySex);
        p1.saySex.should.equal(p2.saySex);
    });

    it('通过原型增加方法时,其该类所有的实例都拥有该方法，且所有的对象实例的方法都指向原型上的方法', function () {
        Person.prototype.saySex = function () {
            console.log(this.name + ' is ' + this.sex);
        }
        should.exist(Person.prototype.saySex);
        should.exist(p1.saySex);
        should.exist(p2.saySex);
        p1.saySex.should.equal(Person.prototype.saySex);
        p2.saySex.should.equal(Person.prototype.saySex);
        p1.saySex.should.equal(p2.saySex);
    });


});

