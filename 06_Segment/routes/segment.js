var express = require('express');
var Segment = require('segment');
var router = express.Router();

var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();
// 开始分词
//console.log(segment.doSegment('这是一个基于Node.js的中文分词模块。'));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(segment.doSegment('这是一个基于Node.js的中文分词模块。'));
});

module.exports = router;
