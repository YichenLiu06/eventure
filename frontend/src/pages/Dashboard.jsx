import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <aside className="sidebar">
        <h2>Events</h2>
        <ul className="event-list">
          <li>Event 1</li>
          <li>Event 2</li>
          <li>Event 3</li>
          {/* Add more events here */}
        </ul>
      </aside>
      <main className="main-content">
        <div className="map-container">
          <h1>Map here</h1>
        </div>
        <button className="create-event-button">Create Event</button>
      </main>
    </div>
  );
}