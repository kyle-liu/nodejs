var exec = require("child_process").exec;

var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");


//最大的改变就是把reponse对象传入
function start(request, reponse) {

    console.log("Request handler 'start'  was  callde.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" ' +
        'content="text/html; charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" enctype="multipart/form-data" ' +
        'method="post">' +
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />' +
        '</form>' +
        '</body>' +
        '</html>';

    reponse.writeHead(200, {"Content-Type": "text/html"});
    reponse.write(body);
    reponse.end();

}


function upload(request, reponse) {
    console.log("Request handler 'upload' was called.");
    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function (error, fields, files) {
        console.log("files : " + files);
        fs.renameSync(files.upload.path, "/tmp/test.png");
        reponse.writeHead(200, {"Content-Type": "text/html"});
        reponse.write("received image:<br>");
        reponse.write("<img src='/show' />");
        reponse.end();

    })

}


function show(request, response) {
    console.log("Request handler  'show' was called.");
    fs.readFile("/tmp/test.png", "binary", function (error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        }
        else {

            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;

