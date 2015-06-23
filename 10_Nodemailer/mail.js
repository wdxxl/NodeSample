var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: '455142495@qq.com',
        pass: ''//your password
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Fred Foo ✔ <455142495@qq.com>', // sender address
    to: '455142495@qq.com', // list of receivers
    subject: 'Hello ✔ Node.JS通过SMTP协议从QQ邮箱发送邮件', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});