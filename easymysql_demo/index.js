var client = require('easymysql');

var mysql = client.create({
    'maxconnections': '10'
});

mysql.addserver({
    'host': '127.0.0.1',
    'user' : 'root',
    'password' : '',
    'database' : 'test'
});

mysql.query('show databases', function (error , res){
    console.log('my DB info :');
    console.log(res);

});


mysql.query({
  sql: 'select * from user where  user_name = :name',
  params: {name: 'canhun'}}, function (err, rows) {
    console.log('query result: ');
    console.log(rows);
});


