require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();
const config = require('./static.json');
const routes = require('./routes/api-router');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api', routes);

app.use(express.static(__dirname + `/build`));

app.get('*', (req, res) => res.sendFile( path.resolve(__dirname, 'build', 'index.html')) );

app.listen(port, function (err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});
