import React from 'react'
import Nav from '../components/nav';
import { Link,useNavigate } from 'react-router-dom'; 

function dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="nav-bar">
        <div id="portfolio"> FormKit</div>
        <ul className='main-elements'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Forms</Link></li>
          </ul>
        <ul className='main-elements'>
          <li><Link to='/'>Go back</Link></li>
        </ul>
      </nav>
      <h1>Welcome to dashboard...</h1>
      <button className='createform' onClick={() => navigate('/create-page')}>Create form</button>
    </div>
  )
}

export default dashboard;