var http = require('http');

var parse = require('url').parse;
var fs = require('fs');

var indexHtml = fs.readFileSync('./index.html');

var app= http.createServer(function (req, res){
    res.setHeader('X-Power-By', 'Node.js');
    res.setHeader('Content-Type', 'text/html');

    var info = parse(req.url, true);

    if(info.pathname === '/') {
        res.end(indexHtml);
    }

    if(info.pathname === '/api') {

        var query =  info.query;
        if(!query.u) {
            return res.end('`u` argument required');
        }

        urllib.expand(query.u ,function (err, longurl) {
            if(query.cb) {
                longurl = query.cb + '(' +JSON.stringify(longurl)+ ')';
            }
            res.end(longurl);
        });
        return ;

    }
});


module.exports = app;
