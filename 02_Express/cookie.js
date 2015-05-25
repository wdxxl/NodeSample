/**
 * Created by wangkexue on 2015/5/25.
 */
var express =  require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var app = express();

if('test' != process.env.NODE_ENV)
    app.use(logger(':method :url'));
app.use(cookieParser('my secret here'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res){
    if(req.cookies.remember){
        res.send('Remembered :). Click to <a href="/forget">forget</a>!.');
    }else{
        res.send('<form method="post"><p>Check to<label>' +
            '<input type="checkbox" name="remember"/>remember me</label>' +
            '<input type="submit" value="submit"/>.</p></form>')
    }
});

app.get('/forget',function(req,res){
    res.clearCookie('remember');
    res.redirect('back');
});

app.post('/',function(req,res){
    var minute = 60000;
    if(req.body.remember) res.cookie('remember',1,{maxAge:minute});
    res.redirect('back');
});

app.listen(3000,function(){
    console.log('Express cookie examples started on port 3000');
});