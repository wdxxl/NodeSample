/**
 * Created by wangkexue on 2015/5/25.
 */
var express = require('express');
var session = require('express-session');

var app = express();

// Populates req.session
app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    //cookie: {maxAge: 8000}, //设置maxAge是8000ms，即8s后session和相应的cookie失效过期
    secret: 'keyboard cat'
}));

app.get('/', function(req, res){
    var body = '';
    if (req.session.views) {
        ++req.session.views;
    } else {
        req.session.views = 1;
        body += '<p>First time visiting? view this page in several browsers :)</p>';
    }
    res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

app.listen(3000,function(){
    console.log('Express session examples started on port 3000');
});