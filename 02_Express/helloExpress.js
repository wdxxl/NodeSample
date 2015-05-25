/**
 * Created with JetBrains WebStorm.
 * User: wangkexue
 * Date: 15-5-12
 * Time: 下午3:53
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express();

// 一个简单的 logger
app.use(function(req, res, next){
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    console.log('IP: %s - %s %s',ip, req.method, req.url);
    next();
});
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello express')
});
app.listen(3000);