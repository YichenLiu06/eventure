import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MapPanel from './components/Map/Map'
import CreateEventForm from './components/CreateEventForm/CreateEventForm'
import './App.css'

function App() {
  
  const [latitude, setLatitude] = useState(parseFloat(localStorage.getItem('latitude'))||0)
  const [longitude, setLongitude] = useState(parseFloat(localStorage.getItem('longitude'))||0)
  
  function handleClick (event){
    setLatitude(event.detail.latLng.lat)
    setLongitude(event.detail.latLng.lng)
    console.log(event.detail.latLng.lat)
    window.localStorage.setItem("latitude", event.detail.latLng.lat)
    window.localStorage.setItem("longitude",event.detail.latLng.lng)
  }
  console.log(parseFloat(window.localStorage.getItem('latitude')))
  return (
    <>
      <CreateEventForm author_id={1} latitude={latitude} longitude={longitude}/>
      <MapPanel handleClick={handleClick} latitude = {window.localStorage.getItem('latitude')|latitude} longitude = {window.localStorage.getItem('longitude')|longitude}/>
    </>
    
  )
}

export default App
