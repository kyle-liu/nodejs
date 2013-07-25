
/*
 * GET users listing.
 */

exports.list = function(req, res){

  res.render("list",{
      title: "list",
      items: [1991, "byvoid", "express" , "node.js"]
      });
  res.send("respond with a resource");
};


exports.user = function(req, res) {

};

exports.reg = function(req, res){
    res.render("reg", {message: req.flash('juechen'), title: "用户注册"});
};

exports.doReg = function(req, res) {
    req.flash("juechen", "两次输入的口令不一致");
    res.redirect("/reg");

// if(req.body["password-repeat"] != req.body["password"]){
//
////     return res.redirect("/doreg");
//     //生成口令md5散列值
//     var md5 = crypto.createHash("md5");
//     var password = md5.update(req.body.password).digest("base64");
//     var newUser = new User({
//         name: req.body.username,
//         password: password
//     });
//
//     newUser.save(function(err) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         req.session.user = newUser;
//         res.rediect("/");
//     });

// }

};

exports.login = function(req, res) {
    res.render("login", {title: "用户登录"});

};

exports.doLogin = function(req, res) {


};

exports.post = function(req, res){


};

exports.logout =  function(req, res) {

};
