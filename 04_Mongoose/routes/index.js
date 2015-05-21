/**
 * Created by wangkexue on 2015/5/21.
 */
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var user = require("../models/user").user;
mongoose.connect("mongodb://localhost/hello-world");

router.get('/',function(req,res){
   res.render('index',{title:'index'});
});

router.get('/login',function(req,res){
    res.render('login',{title:'login'});
});

router.get('/logout',function(req,res){
    res.render('logout',{title:'logout'});
});


