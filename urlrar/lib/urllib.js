var urlUtil = require('url');
var http = require('http');

exports.expand =  function (url , callback) {

    var info =urlUtil.parse(url);
    var options = {
      hostname: info.hostname,
      path: info.path,
      method: 'HEAD'
    };

    var request = info.protocol === 'https:'?https.request: http.request;
    var req = request(options);
    if(callback.__redirectCounter === undefined) {
        callback.__redirectCounter = 0;
    }

    req.on('response', function (res) {
        if (res.statusCode === 301 || res.statusCode === 302) {

            var location = res.headers['location'];
            if(++callback.__redirectCounter > exports._maxRedirects) {

                return callback(null, location, callback.__redirectCounter);
            }
            return exports.expand(location, callback);
        }
        callback(null, url, callback.__redirectCounter);
    });
    req.end();

}

exports.maxRedirects = 5;


