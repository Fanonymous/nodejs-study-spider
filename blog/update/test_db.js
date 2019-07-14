var request=require('request');
var cheerio=require('cheerio');
var mysql=require('mysql');
var debug=require('debug')('blog:update');

//创建数据库连接
var db=mysql.createConnection({
	host:  	   '127.0.0.1',
	post:       3306,
	database:  'sina_blog' ,
	user:      'root',
	password:  '',
});

//显示所有数据库连接
//

db.query('show tables',function(err,tables){
	if(err){
		console.error(err.stack);
	}
	else{
		console.log(tables)
	}

	//关闭连接
	db.end();
});