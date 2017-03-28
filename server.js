require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api-router');

const app = express();
const port = process.env.PORT || 8080;
const config = {
  root: 'build/',
  home: 'index.html'
};

app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api', routes);
app.use(express.static(__dirname + `/${config.root}`));

app.get('*', (req, res) => res.sendFile( path.resolve(__dirname, config.root, config.home)) );

app.listen(port, function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});
