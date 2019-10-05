'use strict'

const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const url = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;

mongoose.connect(url, { useNewUrlParser: true }, error => error ? console.error(`MongoDB Conneciton error: ${error}`): null);
mongoose.connection.on('connected', _ => console.info("[MongoDB] Connected to " + url))

app.use(bodyParser.urlencoded({ useNewUrlParser: true } ));
app.use(bodyParser.json());
app.use(cors());
app.use('/', require('./routes'));

app.listen(config.server.port, config.server.host, _ => console.log(`Server runing at http://${config.server.host}:${config.server.port}/`));
