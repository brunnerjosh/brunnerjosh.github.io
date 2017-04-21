const express = require('express');
const Flickr = require('flickrapi');
const flickrOptions = {
  api_key: process.env.FLICKR_KEY,
  secret: process.env.FLICKR_SECRET
};

const router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'success' });
});

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
  if (error) console.error('Flickr error: ', error);
  flickr.proxy(router, '/flickr')
});

router.get('/*', function(req, res) {
  res.sendStatus(404);
});

//------------------------------------------------------------------------------
//  WebRTC Signaling
function socketIdsInRoom(roomId) {
  var socketIds = io.nsps['/'].adapter.rooms[roomId];
  if (socketIds) {
    var collection = [];
    for (var key in socketIds) {
      collection.push(key);
    }
    return collection;
  } else {
    return [];
  }
}

io.on('connection', function(socket){
  console.log('Connection');
  socket.on('disconnect', function(){
    console.log('Disconnect');
    delete socketIdToNames[socket.id];
    if (socket.room) {
      var room = socket.room;
      io.to(room).emit('leave', socket.id);
      socket.leave(room);
    }
  });

  /**
   * Callback: list of {socketId, name: name of user}
   */
  socket.on('join', function(joinData, callback){ //Join room
    let roomId = joinData.roomId;
    let name = joinData.name;
    socket.join(roomId);
    socket.room = roomId;
    socketIdToNames[socket.id] = name;
    var socketIds = socketIdsInRoom(roomId);
    let friends = socketIds.map((socketId) => {
      return {
        socketId: socketId,
        name: socketIdToNames[socketId]
      }
    }).filter((friend) => friend.socketId != socket.id);
    callback(friends);
    //broadcast
    friends.forEach((friend) => {
      io.sockets.connected[friend.socketId].emit("join", {
        socketId: socket.id, name
      });
    });
    console.log('Join: ', joinData);
  });

  socket.on('exchange', function(data){
    console.log('exchange', data);
    data.from = socket.id;
    var to = io.sockets.connected[data.to];
    to.emit('exchange', data);
  });

  socket.on("count", function(roomId, callback) {
    var socketIds = socketIdsInRoom(roomId);
    callback(socketIds.length);
  });

});

module.exports = router;
