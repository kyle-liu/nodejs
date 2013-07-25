/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path');
var flash = require("connect-flash");


var MongoStore = require("connect-mongo")(express);
var setting = require("./settings");


var app = express();

// all environments settings
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');




app.use(express.favicon());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(express.cookieParser());
app.use(express.session({
    secret: setting.cookieSecret,
    store: new MongoStore({
        db:setting.db
    })
}));
app.use(flash());

app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    /**
     * req.flash用于两次请求之间传值，将值放入session
     * 但是再第二次请求过来，第一次读取后就从session中删除
     */
    var error =  req.flash("error");
    res.locals.error = error.length ? error : null;
    var success = req.flash("success");

    res.locals.success = success.length ? success : null;
    next();
});

app.use(app.router);


app.get('/', routes.index); //首页
app.get('/reg', user.reg); //注册页
app.post('/doreg', user.doReg);//注册
app.get('/login', user.login);//登录页
app.post('/dologin', user.doLogin);//登录
app.post("/post", user.post); //发布微博
app.get("/logout", user.logout); //登出

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
