

var server = require("./server4");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
//将请求处理器的方法组装成数组
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route , handle);