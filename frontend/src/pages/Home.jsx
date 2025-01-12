import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    <div id="main">
      <h1 id="mainTitle">Eventure</h1>
      <h3 id="desc">Find events near you!</h3>
      <Button onClick={handleSignInClick} />
    </div>
  );
}