const express = require('express')
const database = require('./db/initdb.js')

const app = express()
const eventRouter = express.Router()

eventRouter.get('/', (req, res) => {
    const selectEventsQuery = database.prepare(
        'SELECT * FROM events'
    )
    const events = selectEventsQuery.run().all()
    res.json(events)
})

eventRouter.post('/', (req, res) => {
    try {
        const insertEventsQuery = database.prepare(
            `INSERT INTO events (author_id, timestamp, title, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)`
        )
        insertEventsQuery.run(req.body.author_id, req.body.timestamp, req.body.title, req.body.description, req.body.latitude, req.body.longitude)
        res.sendStatus(200)
    }
    catch (err){
        res.status(500).json({message: "Internal Server Error"})
    }
})

eventRouter.put('/', (req, res) => {

})

eventRouter.delete('/', (req, res) => {
    try {
        const deleteEventsQuery = database.prepare(
            `DELETE FROM events WHERE author_id = ? AND id = ?`
        )
        deleteEventsQuery.run(req.body.author_id, req.body.id)
    }
    catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
})

