import { useState } from "react"

function CreateEventForm({author_id, latitude, longitude}){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [timestamp, setTimestamp] = useState(new Date())

    async function handleSubmit(e){
        const data = new URLSearchParams({
            author_id,
            title,
            timestamp: timestamp+":00.000Z",
            description,
            latitude,
            longitude
        })
        const response = await fetch("http://localhost:5000/events", {
            method: "POST",
            body: data,
        })
    }

    return (
        <form className="flex flex-row gap-2">
            <div>latitude: {latitude}</div>
            <div>longitude: {longitude}</div>
            <label htmlFor="title">Title:</label>
            <input type="text" value={title} onChange={e => {setTitle(e.target.value)}} name="title" className="border-black" />
            <label htmlFor="date">Time</label>
            <input type="datetime-local" value={timestamp} onChange={e => {setTimestamp(e.target.value)}} className="border-black"></input>
            <label htmlFor="lname">Description:</label>
            <input type="text" value={description} onChange={e => {setDescription(e.target.value)}} name="description" className="border-black"/>
            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form> 
    )
}

export default CreateEventForm