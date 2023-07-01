require('./db.js');
const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./routes/index.js');

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(
  cors({
    origin: '*',
  })
);

server.set('view engine', 'ejs');

server.use('/', routes);

module.exports = server;
