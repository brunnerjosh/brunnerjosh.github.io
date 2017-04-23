module.exports = (server) => {

  const io = require('socket.io').listen(server);
  const socketIdToNames = {}

  //------------------------------------------------------------------------------
  //  WebRTC Signaling
  function socketIdsInRoom(roomId) {
    var socketIds = io.nsps['/'].adapter.rooms[roomId];
    if (socketIds.sockets) {
      var collection = [];
      for (var key in socketIds.sockets) {
        collection.push(key);
      }
      return collection;
    } else {
      return [];
    }
  }

  io.on('connection', function(socket){
    console.log('SOCKET_CONNECT: ' + socket.id);

    socket.on('disconnect', function(){
      console.log('SOCKET_DISCONNECT: ' + socket.id + ': ' + socketIdToNames[socket.id]);
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
      // broadcast
      friends.forEach((friend) => {
        io.sockets.connected[friend.socketId].emit('join', {
          socketId: socket.id, name
        });
      });
      console.log('SOCKET_JOIN: ', joinData);
    });

    socket.on('exchange', function(data){
      data.from = socket.id;
      var to = io.sockets.connected[data.to];
      to.emit('exchange', data);
    });

  });
}
