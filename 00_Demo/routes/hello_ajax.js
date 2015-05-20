/**
 * Created by wangkexue on 2015/5/14.
 */
var express = require('express');
var router = express.Router();

/* GET hello_boot_div page. */
router.get('/', function(req, res, next) {
    res.render('hello_ajax', { title: 'Ajax' });
});

router.get('/getData', function(req, res, next) {
    res.send({"red":{"id":1,"name":"mary"},"blue":{"id":2,"name":"u71d5u5b50"}});
});
module.exports = router;