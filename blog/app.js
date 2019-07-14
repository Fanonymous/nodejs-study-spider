var path=require('path');
var express=require('express');
var read=require('./web/read');
var config=require('./config');

var app=express();

//配置express
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use('/public',express.static(path.join(__dirname,'public')));

//网站首页
app.get('/',function(req,res,next){
	//articleListByClassId的第一个参数是文章分类的ID
	//第二个参数是返回结果的开始位子
	//第三个参数是返回结果的数量
	read.articleListByClassId(0,0,20,function(err,list){
		if(err) return next(err);

		//渲染模板
		res.locals.articleList=list;
		res.render('index');
	});
});
//文章页面
app.get('/article/:id',function(req,res,next){
	//通过req.params.id来取得URL中:id部分的参数
	read.article(req.params.id,function(err,article){
		if(err) return next(err);

		//渲染模板
		res.locals.article=article;
		res.render('article');
	});
});

app.listen(config.port);
console.log('服务器已启动');