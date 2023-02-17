import React from 'react'
import Nav from '../components/nav';
import { Link, useNavigate } from 'react-router-dom'; 

function home() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <h1>Welcome to homepage...</h1>
      <button className='createform' onClick={() => navigate('/create-page')}>Create form</button>
    </div>
  )
}

export default home;