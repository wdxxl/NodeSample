/**
 * Created with JetBrains WebStorm.
 * User: wangkexue
 * Date: 15-5-12
 * Time: 下午3:53
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express();
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello express')
});
app.listen(3000);