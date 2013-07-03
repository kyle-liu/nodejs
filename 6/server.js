var http = require("http");

var url = require("url");



//传入路由方法和请求处理方法
function start(route ,handler){

    function onRequest(request, response){
       //获取请求的url
        var pathname = url.parse(request.url).pathname;
        console.log("Requst for [" + pathname + "]  received");

        request.setEncoding("utf-8");
        var postData = "";
        request.addListener("data", function(postDataChunk){

           postData += postDataChunk;
           console.log("Received POST data chunk : " + postDataChunk);
        });

        request.addListener("end", function(){
           //传入请求处理器和请求的urls
           route(handler, pathname, response, postData);

        });

    }

    http.createServer(onRequest).listen(8888);
    console.log("server4 has started.")
}

exports.start =start;
