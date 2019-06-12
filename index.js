'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();

const url = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.database}`;

mongoose.connect(url, config.mongodb.connectionConfig, error => error ? console.error(`MongoDB Conneciton error: ${error}`): null);

app.use(bodyParser.urlencoded({ useNewUrlParser: true } ));
app.use(cors());
app.use('/', require('./routes'));

const port = config.server.port;
const host = config.server.host;

app.listen(port, host, () => console.log(`Server runing at http://${host}:${port}/`));

