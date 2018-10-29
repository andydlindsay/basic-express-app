'use strict';

// get the tools we need
const express = require('express');
const routes = require('./routes/index.js');
const port = process.env.PORT || 3000;

const app = express();

// set up the express application
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

// set up routes
routes(app);

// start the server
app.listen(port, () => {
  console.log('Server listening on port ' + port + '...');
});
