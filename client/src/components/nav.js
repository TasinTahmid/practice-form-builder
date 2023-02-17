import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

export class nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar">
          <div className='div1'>
            <div id="portfolio"> FormKit</div> 
          </div>
          <ul className='main-elements'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Forms</Link></li>
          </ul>
          <ul className="nav-list">
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/Register'>Register</Link></li>     
          </ul>
        </nav>
      </div>
    )
  }
}

export default nav;