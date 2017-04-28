const rooms = [];
const OPEN_ROOM_DURATION = 2; // mins

function addDashes (num)
{
  return num.slice(0,3)+'-'+num.slice(3,6)+'-'+num.slice(6);
}

function generateRoomId () {
  rooms.push({
    createdAt: (new Date()).getTime(),
    roomId: addDashes(Math.floor(100000000 + Math.random() * 900000000).toString())
  })
  return rooms[rooms.length - 1];
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
      const newRoom = generateRoomId();
      console.log("Creating new chat room: ", newRoom)
      return newRoom;
    }
  } else {
    return generateRoomId();
  }
}

module.exports = findRoom;
