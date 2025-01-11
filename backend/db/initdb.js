#! /usr/bin/env node

const {DatabaseSync} = require('node:sqlite');
const database = new DatabaseSync(':memory:');

const initUsersTable = database.prepare(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR ( 255 ),
    password VARCHAR ( 255 )
  )`
)

const initEventsTable = database.prepare(`
  CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    author_id VARCHAR ( 255 ),
    timestamp DATETIME,
    title VARCHAR ( 255 ),
    description TEXT,
    latitude DECIMAL(8,6),
    longitude DECIMAL (9,6)
  );`)

function initDatabase(){
  initUsersTable.run()
  initEventsTable.run()
  const initUser = database.prepare(
    `INSERT INTO users (username, password) VALUES (?, ?);`
  )
  const initEvent = database.prepare(
    `INSERT INTO events (author_id, timestamp, title, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)`
  )
  initUser.run('test', '1234')
  initEvent.run(1, (new Date().toISOString()), "Hangout", "Come hangout!", 43.26538488736836, -79.91826819513058)
  const usersQuery = database.prepare('SELECT * FROM users')
  const eventsQuery = database.prepare('SELECT * FROM events')
  console.log(usersQuery.all())
  console.log(eventsQuery.all())
}

initDatabase()