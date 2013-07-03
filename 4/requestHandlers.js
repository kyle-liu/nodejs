

var exec = require("child_process").exec;

function start() {

    console.log("Request handler 'start'  was  callde.");

    var content = "empty";

    //异步执行，虽然在这里不会阻塞，但是content永远返回的是emtpy,不是我们预期想要的结果
    exec("ls -lah" , function(error, stdout, stderr){

        content = stdout;
        console.log(content);
    });

    return content;
}


function upload(){

    console.log("Request handler 'upload' was called.");
    return "Hello Upload";

}

exports.start = start;
exports.upload = upload;
