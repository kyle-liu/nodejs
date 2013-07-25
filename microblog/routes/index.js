
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '首页' });
};


exports.hello = function(req, res){
  res.send("The time is " +new Date());
};



