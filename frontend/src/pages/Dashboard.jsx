import {React, useEffect, useState} from 'react';
import { useNavigate} from 'react-router-dom';
import MapPanel from '../components/MapPanel/MapPanel';
import '../App.css';

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}


function displayMinutes(minutes){
  return minutes >= 10 ? minutes : "0" + minutes.toString();
}

const timeDisplayOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([])
  
  useEffect(() => {
      async function populateEvents(){
          const response = await fetch("http://localhost:5000/events", {
              method: "GET",
          })
          const data = await response.json()
          console.log(data)
          setEvents(data)
      }
      populateEvents()
  }, [])

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="flex flex-row w-screen">
      <aside className="h-screen flex flex-col">
          <h2>Events</h2>
          <ul className="flex flex-col gap-2 p-2 w-full overflow-y-scroll overflow-x-hidden">
            {events.map((event)=>{
              const timestamp = parseISOString(event.timestamp)
              return(
              <li key={event.id} className='w-52 bg-white rounded-xl p-2 text-black'>
                <h1 className='font-bold text-base'>{event.title}</h1>
                <h2>{timestamp.toLocaleDateString(undefined, timeDisplayOptions) + "\n " + timestamp.getHours()+":"+displayMinutes(timestamp.getMinutes())}</h2>
                <p>{event.description}</p>
              </li>)
            })}
          </ul>
        
      </aside>
      <main className="main-content">
          <MapPanel events={events}/>
      </main>
    </div>
  );
}