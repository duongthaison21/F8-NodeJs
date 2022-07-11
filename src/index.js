const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const routes = require('./routes/index');
const db = require('./config/db/index');

// Connect DB to express
db.connect();

// Use static file by HTTP
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes initial
routes(app);

// App listening
app.listen(port);
