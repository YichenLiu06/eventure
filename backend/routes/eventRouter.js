const express = require('express')
const database = require('../db/db.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const eventRouter = express.Router()

eventRouter.use(cors())
eventRouter.use(bodyParser.urlencoded({ extended: true }));
eventRouter.use(bodyParser.json());

eventRouter.get('/', (req, res) => {
    try{
        const selectEventsQuery = database.prepare(
            'SELECT * FROM events'
        )
        const events = selectEventsQuery.all()
        res.json(events)
    }
    catch(err){
        res.status(500).json({message: err})
    }
})

eventRouter.post('/', (req, res) => {
    try {
        console.log(req.body.author_id)
        console.log(req.body.latitude)
        const insertEventsQuery = database.prepare(
            `INSERT INTO events (author_id, timestamp, title, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)`
        )
        insertEventsQuery.run(req.body.author_id, req.body.timestamp, req.body.title, req.body.description, req.body.latitude, req.body.longitude)
        res.sendStatus(200)
    }
    catch (err){
        res.status(500).json({message: err})
    }
})

eventRouter.put('/', (req, res) => {
    try {
        const insertEventsQuery = database.prepare(
            `UPDATE events SET title=coalesce(?, title), description = coalesce(?, description), latitude = coalesce(?, latitude), longitude = coalesce(?, longitude) WHERE id = ?`
        )
        insertEventsQuery.run(req.body.title, req.body.description, req.body.latitude, req.body.longitude, req.body.id)
        res.sendStatus(200)
    }
    catch (err){
        res.status(500).json({message: err})
    }
})

eventRouter.delete('/', (req, res) => {
    try {
        const deleteEventsQuery = database.prepare(
            `DELETE FROM events WHERE author_id = ? AND id = ?`
        )
        deleteEventsQuery.run(req.body.author_id, req.body.id)
        res.sendStatus(200)
    }
    catch(err){
        res.status(500).json({message: err})
    }
})

module.exports = eventRouter