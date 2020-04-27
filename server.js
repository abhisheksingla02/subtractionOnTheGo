const Express = require('express');
const app = new Express();

const routes = require('./routes');
app.use('/', routes);

module.exports = app;
