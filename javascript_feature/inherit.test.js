var should = require('should');

function SuperClass() {

    this.name = 'SuperClass';

}

function SubClass() {


}
function Person() {

}


describe('对象原型 ', function () {

    it('eql比较对象的属性值是否相等', function () {
        var person = {
            name: 'aaa',
            age: 18
        };
        var sup = new SuperClass();

        console.log(person.hasOwnProperty('name'));
        console.log(person.hasOwnProperty('age'));
        console.log(person['name']);
        console.log('sup: ' + sup['name']);

        var p = new Person();
        for (var prop in person) {
            p[prop] = person[prop];
        }

        console.log('p:  ');
        for (prop in p) {
           console.log(p);
        }


    });


});