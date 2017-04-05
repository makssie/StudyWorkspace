const express = require('express');
const app = express();

//v1 good practises (version)
app.use('/users/v1', require('./users'));

module.exports = app;