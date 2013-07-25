var assert = require("assert")


describe('mongodb', function () {
    describe('#db', function () {
        it('should return -1 when the value is not present', function () {
            var settings = require("../settings");
            var mongodb = require("mongodb");
            var server = new mongodb.Server(settings.host, settings.port, {auto_reconnect: true}, 10);
            var db = new mongodb.Db("test55", server, {safe: true});

            assert.ok(db);


            db.open(function (err, db) {
                if (err) {
                    console.log(err);
                }

                if (!err) {
                    db.createCollection('test3', {safe: true}, function (err, collection) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("created successful!");
                        }
                    });
                }
            });


        });
    });


})