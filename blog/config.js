//Mysql数据库连接配置
var mysql=require('mysql');
exports.db=mysql.createConnection({
	host:  	   '127.0.0.1',
	post:       3306,
	database:  'sina_blog' ,
	user:      'root',
	password:  ''
})
exports.sinaBlog={
	url:  'http://blog.sina.com.cn/u/1776757314'
};
exports.port=3000;