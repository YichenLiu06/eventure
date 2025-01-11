#! /usr/bin/env node

const {DatabaseSync} = require('node:sqlite');
const database = new DatabaseSync('./eventure.db');

module.exports = database