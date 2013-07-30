var requst = require('supertest');
var should = require('should');
var app = require('../app');


describe('urlrar app', function () {
    before(function (done) {
        app.listen(0, done);

    });

    it('Get / should show the title, a form and a text input', function (done) {
        requst(app).get('/').expect(200).expect('X-Power-By', 'Node.js')
            .end(function (err, res) {
              var body = res.text;
              body.should.include('<title>Shorten URL Expand</title>');
              body.should.include('<form>');
              body.should.include('</form>');
              body.should.include('<input>');
              done(err);

            });
    });

    it('GET /api should have an api', function (done) {
        requst(app).get('api').get('/api').expect(200)
            .expect('X-Power-By', 'Node.js', done);
    });

    it('GET /other should not found the page', function (done) {
        requst(app).get('/noexists').expect(404)
            .expect('Page Not Found', done);

    });
});



