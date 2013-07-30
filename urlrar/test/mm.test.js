var mm = require('mm');
var fs = require('fs');

mm.error(fs, 'readFile', 'mock fs.readFile return error');

fs.readFile('/etc/hosts', 'utf8', function (err, conttent){

    console.log(err);
    mm.restore();

    fs.readFile('/etc/hosts', 'utf-8', function (err, content){
        console.log(err);
        console.log(content);
    });
});