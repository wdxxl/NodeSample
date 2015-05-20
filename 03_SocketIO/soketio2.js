/**
 * Created by wangkexue on 2015/5/19.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
    res.sendfile('index2.html',{ title: 'Ajax' });
});

//一个客户端连接的字典，当一个客户端连接到服务器时，
//会产生一个唯一的socketId，该字典保存socketId到用户信息（昵称等）的映射
var connectionList = {};
io.sockets.on('connection', function (socket) {
    //客户端连接时，保存socketId和用户名
    var socketId = socket.id;
    connectionList[socketId] = {
        socket: socket
    };
    //用户进入聊天室事件，向其他在线用户广播其用户名
    socket.on('join', function (data) {
        socket.broadcast.emit('broadcast_join', data);
        connectionList[socketId].username = data.username;
        console.log(socketId)//HLx1Xu4WZzs6kqOeAAAA
    });
    //用户离开聊天室事件，向其他在线用户广播其离开
    socket.on('disconnect', function () {
        if (connectionList[socketId].username) {
            socket.broadcast.emit('broadcast_quit', {
                username: connectionList[socketId].username
            });
        }
        delete connectionList[socketId];
    });
    //用户发言事件，向其他在线用户广播其发言内容
    socket.on('say', function (data) {
        socket.broadcast.emit('broadcast_say',{
            username: connectionList[socketId].username,
            text: data.text
        });
    });
});

http.listen(3000, function(){
    console.log('listening on :3000');
});