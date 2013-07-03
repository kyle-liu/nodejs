var http = require("http");

var url = require("url");



//传入路由方法和请求处理方法
function start(route ,handler){

    function onRequest(request, response){
       //获取请求的url
        var pathname = url.parse(request.url).pathname;
        console.log("Requst for [" + pathname + "]  received");


         //传入请求处理器和请求的urls
        var content = route(handler, pathname, response);
    }

    http.createServer(onRequest).listen(8888);
    console.log("server4 has started.")
}

exports.start =start;
