'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

const url = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;

mongoose.connect(url, { useNewUrlParser: true }, error => error ? console.error(`MongoDB Conneciton error: ${error}`): null);
mongoose.connection.on('connected', () => console.info("[MongoDB] Connected to " + url))

app.use(bodyParser.urlencoded({ useNewUrlParser: true } ));
app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./routes'));

const port = config.server.port;
const host = config.server.host;

app.listen(port, host, () => console.log(`Server runing at http://${host}:${port}/`));

