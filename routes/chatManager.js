const rooms = [];
const OPEN_ROOM_DURATION = 2; // mins

function addDashes (num)
{
  return num.slice(0,3)+'-'+num.slice(3,6)+'-'+num.slice(6);
}

function isUniqueRoom (roomId) {
  for (var i = 0; i < rooms.length; i++){
    if (rooms[i].roomId === roomId) {
      return false;
    }
  }
  return true;
}

function createNewRoom () {
  return {
    createdAt: (new Date()).getTime(),
    roomId: addDashes(Math.floor(100000000 + Math.random() * 900000000).toString())
  };
}

function generateRoomId () {
  var newRoom = createNewRoom();
  if (isUniqueRoom(newRoom.roomId)) {
    rooms.push(newRoom);
    return rooms[rooms.length - 1];
  }
  return null;
}

function findRoom () {
  const lastRoom = rooms[rooms.length - 1] || null;
  if (lastRoom) {
    const timeNow = (new Date()).getTime();
    const fiveMinsBefore = timeNow - OPEN_ROOM_DURATION * 60 * 1000;
    if (lastRoom.createdAt > fiveMinsBefore) {
      console.log('Returning previously created room', lastRoom);
      return lastRoom;
    } else {
      while (true) {
        var newRoom = generateRoomId();
        if (newRoom) {
          console.log("Creating new chat room: ", newRoom)
          return newRoom;
        }
      }
    }
  } else {
    return generateRoomId();
  }
}

module.exports = findRoom;
