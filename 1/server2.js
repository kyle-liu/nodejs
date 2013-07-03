/**
 * Created with JetBrains WebStorm.
 * User: kyle
 * Date: 13-6-21
 * Time: 下午11:29
 * To change this template use File | Settings | File Templates.
 */



//请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。
var http = require("http");
function onRequest(request, response) {
    console.log("request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World  !! My name is Server3  ,  now :" + new Date());
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("server3 is started");