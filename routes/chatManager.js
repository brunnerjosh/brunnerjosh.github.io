var rooms = {};

function addDashes (num)
{
  return num.slice(0,3)+'-'+num.slice(3,6)+'-'+num.slice(6);
}

function generateRoomId () {
  return addDashes(Math.floor(100000000 + Math.random() * 900000000).toString());
}

function findRoom () {
  return generateRoomId();
}

module.exports = findRoom;
