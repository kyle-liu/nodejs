var exec = require("child_process").exec;

var querystring = require("querystring");


//最大的改变就是把reponse对象传入
function start(reponse, postData) {

    console.log("Request handler 'start'  was  callde.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<input name="method" type="hidden" value="upload"/>' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    reponse.writeHead(200, {"Content-Type": "text/html"});
    reponse.write(body);
    reponse.end();

}


function upload(reponse, postData) {
    console.log("Request handler 'upload' was called.");
    reponse.writeHead(200, {"Content-Type": "text/plain"});
    reponse.write("You've send the text : " + querystring.parse(postData).text);
    reponse.write("You've send the method : " + querystring.parse(postData).method);
    reponse.end();

}

exports.start = start;
exports.upload = upload;
