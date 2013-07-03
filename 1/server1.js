/**
 * Created with JetBrains WebStorm.
 * User: kyle
 * Date: 13-6-21
 * Time: 下午11:29
 * To change this template use File | Settings | File Templates.
 */



//请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量。
var http =  require("http");

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World  !! this time :"+new  Date());
    response.end();

}).listen(8888);

console.log("server1 is started");