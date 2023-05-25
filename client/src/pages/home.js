import React from 'react'
import Nav from '../components/nav';
import { Link, useNavigate } from 'react-router-dom'; 

function home() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <h1>1. To Build a Form please click the create form button.</h1>
      <h1>2. Then select the required fields and submit the fields along with a Form name.</h1>
      <button className='createform' onClick={() => navigate('/create-page')}>Create form</button>
    </div>
  )
}

export default home;