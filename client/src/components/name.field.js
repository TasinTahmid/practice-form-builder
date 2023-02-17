import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const Name = ({pset, name}) => {
  const navigate = useNavigate();

  return (
    <div className="form-group">
      <label htmlFor="username" className="form-label">User Name</label>
      <input className="form-control" name="username" onChange={(e)=> pset(e.target.value)}  />
    </div>
  )
  
}


export default Name;