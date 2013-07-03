var http = require("http");

var url = require("url");


//传入路由方法和请求处理方法
function start(route, handler) {

    function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname;
        //传入请求处理器和请求的urls
        route(handler, pathname, request, response);
    };

    http.createServer(onRequest).listen(8888);
    console.log("server4 has started.")
}

exports.start = start;
