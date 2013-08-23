console.log('res req 1');
var User = require('./User');
var Student = require('./Student');

console.log('res req 2');
res = {
    user: User,
    student: Student

}