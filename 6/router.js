/**
 * 路由作用，将请求的url path和url处理器连接起来
 */
function route(handle , pathname, response, postData){

    console.log("About to route a request for " + pathname);
    //通过请求的url从请求处理器数组中找到对应的请求处理器
    if(typeof handle[pathname] === "function") {
       return handle[pathname](response, postData);
    }
    else{
        console.log("No request handler found for " + pathname);
        return "404 not fount";
    }
}

exports.route = route;
