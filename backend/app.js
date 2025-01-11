const path = require('node:path')
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(5000, () => console.log('Server started on port 5000'))