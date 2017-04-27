const io = require('socket.io')();
const express = require('express');
const Flickr = require('flickrapi');
const findRoom = require('./chatManager') ;
const flickrOptions = {
  api_key: process.env.FLICKR_KEY,
  secret: process.env.FLICKR_SECRET
};

const router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'success' });
});

router.get('/room', (req, res) => {
  res.json({ roomId: findRoom() });
})

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
  if (error) console.error('Flickr error: ', error);
  flickr.proxy(router, '/flickr')
});

router.get('/*', function(req, res) {
  res.sendStatus(404);
});

module.exports = router;
