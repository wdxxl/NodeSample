/**
 * Created by wangkexue on 2015/5/14.
 */
var express = require('express');
var router = express.Router();

/* GET hello_boot_div page. */
router.get('/', function(req, res, next) {
    res.render('hello_boot_div', { title: 'BootStrap' });
});

module.exports = router;