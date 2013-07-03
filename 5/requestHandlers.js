var exec = require("child_process").exec;


//最大的改变就是把reponse对象传入
function start(reponse) {

    console.log("Request handler 'start'  was  callde.");


    //异步执行，根据不同的URL异步输出我们想要的内容，但是不会阻塞住其他的请求
    exec("find /",{timeout: 10000, maxBuffer: 20000*1024},
        function (error, stdout, stderr) {
        reponse.writeHead(200, {"Content-Type": "text/plain"});
        reponse.write(stdout);
        reponse.end();
    });

}


function upload(reponse) {
    console.log("Request handler 'upload' was called.");
    reponse.writeHead(200, {"Content-Type": "text/plain"});
    reponse.write("Hello Uoload");
    reponse.end();

}

exports.start = start;
exports.upload = upload;
