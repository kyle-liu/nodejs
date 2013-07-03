
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");


var handle = {};
//将请求处理器的方法组装成数组
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route , handle);