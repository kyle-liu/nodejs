

var http =  require("http");

function start() {
    function onRequst(request,response){
        console.log("Rquest received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Server3: Hello World ! now :"+ new Date());
        response.end();

    }

    http.createServer(onRequst).listen(8888);
    console.log("Server3 has started .");
}

exports.start=start;