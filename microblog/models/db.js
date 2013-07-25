var settings = require("../settings");
var mongodb = require("mongodb");
var server = new mongodb.Server(settings.host, settings.port, {auto_reconnect: true}, 10);
module.exports = new mongodb.Db(settings.db, server, {safe: true});




