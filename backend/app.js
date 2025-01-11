const path = require('node:path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const eventRouter = require('./routes/eventRouter.js')
require("dotenv").config();

const app = express();

app.use('/events', eventRouter)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(5000, () => console.log('Server started on port 5000'))