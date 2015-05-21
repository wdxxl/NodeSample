/**
 * Created by wangkexue on 2015/5/21.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchama = new Schema({
    userid:String,
    password:String
});

exports.user = mongoose.model('user',userSchama);