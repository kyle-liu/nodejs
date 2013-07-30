var User = require('../models/user.js');


exports.list = function (req, res) {

    res.render('list', {
        title: 'list',
        items: [1991, 'byvoid', 'express' , 'node.js']
    });
    res.send('respond with a resource');
};


exports.user = function (req, res) {

};

exports.reg = function (req, res) {
   res.render('reg', {title: '用户注册'});
};



exports.doReg = function (req, res) {
    if (req.body['password-repeat'] != req.body['password']) {
        req.flash('error', '两次输入的口令不一致');
        return res.redirect('/reg');
    }

    //生成口令md5散列值
   // var md5 = crypto.createHash('md5');
    //var password = md5.update(req.body.password).digest('base64');
    var password=req.body['password'];
    var newUser = new User({
        name: req.body.username,
        password: password
    });


    //新增用户
    newUser.save(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        req.session.user = newUser;
        req.flash('success', '注册成功');
        res.redirect('/');
    });

};

exports.login = function (req, res) {
    res.render('login', {title: '用户登录'});

};


exports.doLogin = function (req, res) {

    User.get(req.body['username'], function(err, user) {

        if(!user) {

            req.flash('error', '用户不存在');
            return res.redirect('/login');
        }

        if(user.password != req.body['password']) {
            req.flash('error', '用户密码错误');
            return res.redirect('/login');
        }
        req.session.user = user;
        req.flash('success', '登入成功');
        res.redirect('/');
    });


};

exports.post = function (req, res) {


};

exports.logout = function (req, res) {
    req.session.user = null;
    req.flash('success', '登出成功');
    res.redirect('/');

};
